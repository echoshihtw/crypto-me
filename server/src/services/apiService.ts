import axios from "axios";
import { config } from "../config/config";
import { CryptoPriceInfo } from "../types/types";

const symbols = [
  "BTC",
  "ETH",
  "ITC",
  "XMR",
  "XRP",
  "DOGE",
  "DASH",
  "MAID",
  "LSK",
  "SJCX",
];

export async function fetchCryptoPrices(): Promise<CryptoPriceInfo[]> {
  try {
    const response = await axios.get(config.API_URL, {
      params: {
        symbol: symbols.join(","),
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": config.API_KEY,
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
    });

    let prices: CryptoPriceInfo[] = [];
    const { data } = response.data;
    symbols.forEach((crypto) => {
      if (data[crypto]) {
        prices.push({
          name: data[crypto].name,
          symbol: data[crypto].symbol,
          price: data[crypto].quote.USD.price,
          percent_change_24h: data[crypto].quote.USD.percent_change_24h,
          volume_24h: data[crypto].quote.USD.volume_24h,
        });
      }
    });
    return prices;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
}
