import request from "supertest";
import http from "http";
import { app } from "../server.ts";
import { fetchCryptoPrices } from "../services/apiService.ts";

jest.mock("../services/apiService.ts"); // Mock the apiService

describe("App", () => {
  let server: http.Server;

  beforeAll(() => {
    server = http.createServer(app);
    server.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  it("should start the HTTP server without errors", async () => {
    const response = await request(server).get("/");
    expect(response.headers["access-control-allow-origin"]).toBeDefined();
  });
});
