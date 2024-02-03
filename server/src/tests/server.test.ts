import request from "supertest";
import http from "http";
import { app } from "../app";

describe("Server", () => {
  let httpServer: http.Server;
  beforeAll((done) => {
    httpServer = http.createServer(app);
    httpServer.listen(() => {
      done();
    });
  });

  afterAll((done) => {
    httpServer.close(() => {
      done();
    });
  });

  it("should start the HTTP server without errors", async () => {
    const response = await request(httpServer).get("/");
    expect(response.headers["access-control-allow-origin"]).toBeDefined();
  });
});
