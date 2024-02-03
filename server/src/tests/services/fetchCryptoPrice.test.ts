import axios from "axios";
import fetchCryptoPrices from "../../services/fetchCryptoPrices";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchCryptoPrices", () => {
  it("fetches crypto prices correctly", async () => {
    const mockResponse = {
      data: {
        data: {
          BTC: {
            name: "Bitcoin",
            symbol: "BTC",
            quote: {
              USD: {
                price: 50000,
                percent_change_24h: 3.68388705,
                volume_24h: 24631444223,
              },
            },
          },
          ETH: {
            name: "Ethereum",
            symbol: "ETH",
            quote: {
              USD: {
                price: 4000,
                percent_change_24h: 2.91933861,
                volume_24h: 9653744743,
              },
            },
          },
        },
      },
    };

    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await fetchCryptoPrices();
    expect(result).toEqual([
      {
        name: "Bitcoin",
        symbol: "BTC",
        price: 50000,
        percent_change_24h: 3.68388705,
        volume_24h: 24631444223,
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        price: 4000,
        percent_change_24h: 2.91933861,
        volume_24h: 9653744743,
      },
    ]);
  });
});
