import React, { memo } from 'react';

interface CoinCardProps {
  coin: {
    name: string;
    price: string;
  };
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const labelClass = 'text-grey text-body2';
  return (
    <div className="border border-grey p-1 flex flex-col rounded-[4px]">
      <div className="text-h3">{coin.name}</div>
      <div className="text-yellow text-body1">{coin.price}</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className={labelClass}>volume:</div>
          <div className={labelClass}>volumn</div>
        </div>
        <div className="flex flex-col">
          <div className={labelClass}>change</div>
          <div className="text-body2">change</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CoinCard);
