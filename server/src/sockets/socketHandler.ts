import { Server as SocketIOServer } from "socket.io";
import http from "http";
import { fetchCryptoPrices } from "../services/apiService";

export function setupSocketServer(server: http.Server) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);
    fetchCryptoPrices().then((data) => {
      socket.emit("cryptoPricesUpdate", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
}
