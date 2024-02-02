import { Server as SocketIOServer } from "socket.io";
import http from "http";
import { cryptoPrices, getCryptoPrices, lastUpdated } from "../server";

export function setupSocketServer(server: http.Server) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET"],
    },
  });

  const cryptoPriceNamespace = io.of("/crypto-price");

  io.of("/crypto-price").on("connection", async (socket) => {
    socket.join("ticker");
    console.log(`${Date.now()}: ${socket.id} connected`);

    if (!cryptoPrices || lastUpdated - Date.now() > 60000) {
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
