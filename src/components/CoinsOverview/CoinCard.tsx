import React, { memo } from 'react';
import { CoinItem } from '../../model/coinMapper';

interface CoinCardProps {
  coin: CoinItem;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { name, price, volume_24, volume_change_24h } = coin;
  const labelClass = 'text-grey text-body2';
  const changeDigitColor =
    volume_change_24h > 0 ? 'text-price-high' : 'text-price-low';
  return (
    <div className="border border-grey p-1 flex flex-col rounded-[4px]">
      <div className="text-h3">{name}</div>
      <div className="text-yellow text-body1">$ {price}</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className={labelClass}>volume:</div>
          <div className={labelClass}>{volume_24}</div>
        </div>
        <div className="flex flex-col">
          <div className={labelClass}>change:</div>
          <div className={`text-body2 ${changeDigitColor}`}>
            {volume_change_24h}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CoinCard);
