import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { setupSocketServer } from "../../sockets/socketHandler.ts";

describe("Socket Handler", () => {
  let httpServer: http.Server;
  let ioServer: SocketIOServer;

  beforeAll((done) => {
    httpServer = http.createServer();
    ioServer = setupSocketServer(httpServer);
    httpServer.listen(() => {
      done();
    });
  });

  afterAll((done) => {
    ioServer.close();
    httpServer.close(() => {
      done();
    });
  });

  it("should set up socket server without error", () => {
    expect(ioServer).toBeDefined();
  });

  // Further tests can be added to simulate socket events if necessary
});
