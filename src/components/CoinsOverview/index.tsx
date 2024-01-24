import React, { memo } from 'react';
import Frame from '../Frame';
import CoinCard from './CoinCard';
import { CoinItem } from '../../models/coinMapper';
import CoinSkeleton from './CoinSkeleton';

interface CoinsOverviewProps {
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
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {isLoading
            ? defaultArray.map((index) => <CoinSkeleton key={index} />)
            : coins.map((coin) => <CoinCard coin={coin} key={coin.name} />)}
        </div>
      }
    />
  );
};

export default memo(CoinsOverview);
