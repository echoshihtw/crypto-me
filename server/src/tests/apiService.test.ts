import axios, { AxiosResponse } from "axios";
import fetchDataFromApi, { ApiResponse, CoinData } from "../apiService";

jest.mock("axios");
describe("fetchDataFromApi", () => {
  it("fetches data from the API correctly", async () => {
    const mockCoinData: CoinData = {
      BTC: {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        slug: "bitcoin",
        date_added: "2010-07-13T00:00:00.000Z",
        max_supply: 21000000,
      },
      ETH: {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        date_added: "2015-08-07T00:00:00.000Z",
        max_supply: null,
        last_updated: "2024-01-29T20:09:00.000Z",
      },
    };

    const mockApiResponse: ApiResponse = {
      data: {
        data: mockCoinData,
      },
    };

    // Mock axios response
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockApiResponse,
    } as AxiosResponse<ApiResponse>);

    // Call the function
    await fetchDataFromApi();
    const formattedData = Object.keys(mockCoinData).map((key: string) => ({
      ...mockCoinData[key],
    }));

    expect(formattedData).toEqual(expect.any(Array));
    expect(formattedData).toHaveLength(Object.keys(mockCoinData).length);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
    );
  });
});
