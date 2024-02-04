import { CryptoPriceInfo } from "./types/types";

interface GlobalState {
  cryptoPrice?: CryptoPriceInfo[];
  lastUpdated?: number;
}

const state: GlobalState = {
  cryptoPrice: undefined,
  lastUpdated: undefined,
};

export function getPrice(): CryptoPriceInfo[] | undefined {
  return state.cryptoPrice;
}

export function getLastUpdated(): number | undefined {
  return state.lastUpdated;
}

export function updatePrices(newData: CryptoPriceInfo[]): void {
  state.cryptoPrice = newData;
}

export function updateLastUpdated(timestamp: number): void {
  state.lastUpdated = timestamp;
}
