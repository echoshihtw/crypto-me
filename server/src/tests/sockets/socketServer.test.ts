import socketServer from "../../sockets/socketServer";
import { createServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";

describe("socketServer", () => {
  it("should create and configure socket.io server", () => {
    const httpServer = createServer();
    const io = socketServer(httpServer);
    expect(io).toBeInstanceOf(SocketIOServer);
    expect(io._opts).toHaveProperty("cors");
    expect(io._opts["cors"]).toEqual({
      methods: ["GET"],
      origin: "http://localhost:3000",
    });
  });
});
