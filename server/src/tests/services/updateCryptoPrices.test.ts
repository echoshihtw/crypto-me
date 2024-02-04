import updateCryptoPrices from "../../services/updateCryptoPrice";
import { getPrice } from "../../stateManager";
import fetchCryptoPrice from "../../services/fetchCryptoPrices";

const mockCryptoPrices = { BTC: "42000", ETH: "3200" };

jest.mock("../../services/fetchCryptoPrice", () => jest.fn());

describe("getCryptoPrices", () => {
  beforeAll(() => {
    (fetchCryptoPrice as jest.Mock).mockResolvedValue(mockCryptoPrices);
  });

  it("fetches crypto prices and updates global variables", async () => {
    await updateCryptoPrices();
    const cryptoPrices = getPrice();
    expect(cryptoPrices).toEqual(mockCryptoPrices);
  });
});
