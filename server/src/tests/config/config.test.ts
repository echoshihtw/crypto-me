import { config } from "../../config/config";

describe("Config", () => {
  it("should load environment variables correctly", () => {
    expect(config).toBeDefined();
    expect(config.API_KEY).toBeDefined();
    expect(config.API_URL).toBe(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
    );
  });
});
