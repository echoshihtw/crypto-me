import React, { memo } from 'react';
import Frame from '../Frame';
import CoinCard from './CoinCard';
import { CoinItem } from '../../models/CoinMapper';
import CoinSkeleton from './CoinSkeleton';

export interface CoinsOverviewProps {
  coins: CoinItem[];
  title: string;
  isLoading: boolean;
}

const CoinsOverview = ({ title, coins, isLoading }: CoinsOverviewProps) => {
  const defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Frame
      title={title}
      content={
        <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
          {isLoading || coins?.length < 1
            ? defaultArray.map((index) => <CoinSkeleton key={index} />)
            : coins?.map((coin) => <CoinCard coin={coin} key={coin.name} />)}
        </div>
      }
    />
  );
};

export default memo(CoinsOverview);
