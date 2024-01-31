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

const SKELETON_COUNT = 10;
const defaultArray = Array.from(
  { length: SKELETON_COUNT },
  (_, index) => index,
);

const CoinsOverview = ({ title, coins, isLoading }: CoinsOverviewProps) => {
  return (
    <div className="h-full w-full">
      <Frame
        title={title}
        content={
          <div className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading || coins?.length < 1
              ? defaultArray.map((index) => <CoinSkeleton key={index} />)
              : coins?.map((coin) => <CoinCard coin={coin} key={coin.name} />)}
          </div>
        }
      />
    </div>
  );
};

export default memo(CoinsOverview);
