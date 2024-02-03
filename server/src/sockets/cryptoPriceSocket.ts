import { Server as SocketIOServer } from "socket.io";
import http from "http";
import { fetchCryptoPrices } from "../services/apiService";

export let cryptoPrices: any;
export let lastUpdated: number;

export async function getCryptoPrices() {
  console.log("Fetching crypto prices...");
  cryptoPrices = await fetchCryptoPrices();
  lastUpdated = Date.now();
}

export function cryptoPriceSocket(server: http.Server) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET"],
    },
  });

  const cryptoPriceNamespace = io.of("/crypto-price");

  // Get crypto price when there is at least one socket connected
  // and emit to "crypto-price" namespace every 60 seconds.
  // Otherwise, do nothing.
  setInterval(async () => {
    if (io.of("/crypto-price").sockets.size === 0) {
      console.log("No socket connected, returning early...");
      return;
    }
    try {
      await getCryptoPrices();
      io.of("/crypto-price").to("ticker").emit("update-price", cryptoPrices);
      console.log(`${Date.now()}: Emitted update-price`);
    } catch (error) {
      throw new Error(`Failed to fetch crypto prices: ${error}`);
    }
  }, 60000);

  io.of("/crypto-price").on("connection", async (socket) => {
    socket.join("ticker");
    console.log(`${Date.now()}: ${socket.id} connected`);

    if (!cryptoPrices || (lastUpdated && lastUpdated - Date.now() > 60000)) {
      await getCryptoPrices();
    }

    cryptoPriceNamespace.to("ticker").emit("current-price", cryptoPrices);
    console.log(`${Date.now()}: ${socket.id} emitted current-price`);

    socket.on("disconnect", () => {
      console.log(`${Date.now()}: ${socket.id} disconnected`);
    });
  });

  return io;
}
