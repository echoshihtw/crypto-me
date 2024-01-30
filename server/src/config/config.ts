import dotenv from "dotenv";

dotenv.config();

export const config = {
  API_KEY: process.env.CMC_PRO_API_KEY || "",
  API_URL: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
};
