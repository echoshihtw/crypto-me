import { updateLastUpdated, updatePrices } from "../stateManager";
import fetchCryptoPrice from "./fetchCryptoPrices";

export default async function updateCryptoPrices() {
  console.log("Fetching crypto prices...");
  const currentPrice = await fetchCryptoPrice();
  const currentTimestamp = Date.now();
  updatePrices(currentPrice);
  updateLastUpdated(currentTimestamp);
}
