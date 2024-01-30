import axios, { AxiosResponse } from "axios";

interface CoinData {
  [key: string]: any;
}

interface ApiResponse {
  data: {
    data: CoinData;
  };
}

const fetchDataFromApi = async (): Promise<CoinData[] | null> => {
  try {
    const coinMarketCapUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,ITC,XMR,XRP,DOGE,DASH,MAID,LSK,SJCX`;
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response: AxiosResponse<ApiResponse> = await axios.get(
      coinMarketCapUrl,
      options,
    );
    const coinData: CoinData = response.data.data;
    return Object.keys(coinData).map((key: string) => ({
      ...coinData[key],
    }));
  } catch (error: any) {
    console.error("Error fetching data from the API:", error.message);
    return null;
  }
};

export default fetchDataFromApi;
