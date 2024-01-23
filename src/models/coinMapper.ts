export interface CoinItem {
  name: string;
  price: number;
  volume_24: number | undefined;
  volume_change_24h: number | undefined;
}

export interface CoinDataProps {
  id: string;
  name: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_24h: number;
    };
  };
  symbol: string;
}

export function ChangeZeroToUndefined(value: number): number | undefined {
  if (value === 0) {
    return undefined;
  }
  return value;
}

export const mapCoinData = (data: CoinDataProps): CoinItem => {
  return {
    name: data.name,
    price: data.quote.USD.price,
    volume_24: ChangeZeroToUndefined(data.quote.USD.volume_24h),
    volume_change_24h: ChangeZeroToUndefined(
      +data.quote.USD.percent_change_24h,
    ),
  };
};
