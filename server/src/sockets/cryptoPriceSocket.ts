import { Server as SocketIOServer } from "socket.io";
import { getLastUpdated, getPrice } from "../stateManager";
import updateCryptoPrices from "../services/updateCryptoPrice";

export default function cryptoPriceSocket(io: SocketIOServer) {
  const cryptoPriceNamespace = io.of("/crypto-price");

  // Get crypto price when there is at least one socket connected
  // and emit to "crypto-price" namespace every 60 seconds.
  // Otherwise, do nothing.
  setInterval(async () => {
    if (cryptoPriceNamespace.sockets.size === 0) {
      console.log("No socket connected, returning early...");
      return;
    }
    try {
      await updateCryptoPrices();
      io.of("/crypto-price").emit("update-price", getPrice());
      console.log(`${Date.now()}: Emitted update-price`);
    } catch (error) {
      throw new Error(`Failed to fetch crypto prices: ${error}`);
    }
  }, 60000);

  cryptoPriceNamespace.on("connection", async (socket) => {
    console.log(`${Date.now()}: ${socket.id} connected`);

    if (
      !getPrice() ||
      (getLastUpdated() !== undefined && getLastUpdated()! - Date.now() > 60000)
    ) {
      await updateCryptoPrices();
    }
    cryptoPriceNamespace.emit("current-price", getPrice());
    console.log(`${Date.now()}: ${socket.id} emitted current-price`);

    socket.on("disconnect", () => {
      console.log(`${Date.now()}: ${socket.id} disconnected`);
    });
  });

  return io;
}
