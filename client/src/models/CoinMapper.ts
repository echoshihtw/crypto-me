export interface CoinItem {
  name: string;
  price: number;
  volume_24: number | undefined;
  percent_change_24h: number | undefined;
}

export interface CoinDataProps {
  id: string;
  name: string;
  price: number;
  volume_24h: number;
  percent_change_24h: number;
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
    price: data.price,
    volume_24: ChangeZeroToUndefined(data.volume_24h),
    percent_change_24h: ChangeZeroToUndefined(+data.percent_change_24h),
  };
};
