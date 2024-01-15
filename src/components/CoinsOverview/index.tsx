import React, { memo } from 'react';
import Frame from '../Frame';
import CoinCard from './CoinCard';

interface CoinsOverviewProps {
  coins: { name: string; price: string }[];
  title: string;
}

const CoinsOverview = ({ title, coins }: CoinsOverviewProps) => {
  return (
    <Frame
      title={title}
      content={
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.name} />
          ))}
        </div>
      }
    ></Frame>
  );
};

export default memo(CoinsOverview);
