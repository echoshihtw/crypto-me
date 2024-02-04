import { app } from "../app";
// @ts-ignore
import request from "supertest";

describe("Express App with CORS", () => {
  it("should allow cross-origin requests", async () => {
    const response = await request(app)
      .get("/")
      .set("Origin", "http://localhost:3000");

    expect(response.header["access-control-allow-origin"]).toBe("*");
  });
});
