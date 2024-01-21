export interface CoinItem {
  name: string;
  price: number;
  volume_24: number;
  volume_change_24h: number;
}

export const mapCoinData = (data): CoinItem => {
  return {
    name: data.name,
    price: data.quote.USD.price,
    volume_24: data.quote.USD.volume_24h,
    volume_change_24h: +data.quote.USD.volume_change_24h,
  };
};
