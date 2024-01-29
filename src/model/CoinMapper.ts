export interface CoinItem {
  name: string;
  price: number;
  volume_24: number;
  volume_change_24h: number;
}

export interface RawCoinData {
  data: {
    name: string;
    quote: {
      USD: {
        price: number;
        volume_24h: number;
        volume_change_24h: string;
      };
    };
  };
}

export const mapCoinData = ({data}: RawCoinData): CoinItem => {
  return {
    name: data.name,
    price: data.quote.USD.price,
    volume_24: data.quote.USD.volume_24h,
    volume_change_24h: +data.quote.USD.volume_change_24h,
  };
};
