import {
  getLastUpdated,
  getPrice,
  updateLastUpdated,
  updatePrices,
} from "../stateManager";
import { CryptoPriceInfo } from "../types/types";

describe("Crypto Price State Management", () => {
  it("should initially return undefined for both price and last updated", () => {
    expect(getPrice()).toBeUndefined();
    expect(getLastUpdated()).toBeUndefined();
  });

  it("should update and get crypto prices correctly", () => {
    const newPrices: CryptoPriceInfo[] = [
      {
        name: "bitcoin",
        symbol: "BTC",
        price: 50000,
        percent_change_24h: 0.5,
        volume_24h: 1000000,
      },
      {
        symbol: "ETH",
        price: 4000,
        name: "ethereum",
        percent_change_24h: 0.5,
        volume_24h: 1000000,
      },
    ];
    updatePrices(newPrices);
    expect(getPrice()).toEqual(newPrices);
  });

  it("should update and get last updated timestamp correctly", () => {
    const timestamp = Date.now();
    updateLastUpdated(timestamp);
    expect(getLastUpdated()).toEqual(timestamp);
  });
});
