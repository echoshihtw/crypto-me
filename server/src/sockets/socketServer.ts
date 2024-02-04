import http from "http";
import { Server as SocketIOServer } from "socket.io";

export default function socketServer(server: http.Server) {
  return new SocketIOServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET"],
    },
  });
}
