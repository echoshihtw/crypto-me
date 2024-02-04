import createSocketServer from "../../sockets/createSocketServer";
import { createServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";

describe("createSocketServer", () => {
  it("should create and configure socket.io server", () => {
    const httpServer = createServer();
    const io = createSocketServer(httpServer);
    expect(io).toBeInstanceOf(SocketIOServer);
    expect(io._opts).toHaveProperty("cors");
    expect(io._opts["cors"]).toEqual({
      methods: ["GET"],
      origin: "http://localhost:3000",
    });
  });
});
