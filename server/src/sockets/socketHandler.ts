import { Server as SocketIOServer } from "socket.io";
import http from "http";

export function setupSocketServer(server: http.Server) {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
}
