import React, { memo } from 'react';
import { CoinItem } from '../../models/coinMapper';

interface CoinCardProps {
  coin: CoinItem;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { name, price, volume_24, volume_change_24h } = coin;
  const labelClass = 'text-grey text-caption font-medium w-fit';
  const valueClass = 'text-grey text-caption font-medium w-fit';
  const changeDigitColor =
    volume_change_24h && volume_change_24h > 0
      ? 'text-price-high'
      : 'text-price-low';
  return (
    <>
      <div className="border border-grey p-1 flex flex-col rounded-[4px] h-[118px] w-[285px]">
        <div className="text-h3 w-fit">{name}</div>
        <div className="text-yellow text-body1 w-fit">$ {price}</div>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col">
            <div className={labelClass}>volume:</div>
            <div className={valueClass}>{volume_24 || '-'}</div>
          </div>
          <div className="flex flex-col">
            <div className={labelClass}>change:</div>
            <div className={`text-caption ${changeDigitColor} w-fit`}>
              {volume_change_24h || '-'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CoinCard);
