import React, { memo } from 'react';
import { CoinItem } from '../../models/CoinMapper';

interface CoinCardProps {
  coin: CoinItem;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { name, price, volume_24h, percent_change_24h } = coin;
  const labelClass = 'text-grey text-caption font-medium w-fit';
  const valueClass = 'text-grey opacity-75 text-caption font-medium w-fit';
  let changeDigitColor = 'text-grey';
  if (percent_change_24h && percent_change_24h > 0) {
    changeDigitColor = 'bg-price-high/65 px-[4px]';
  } else if (percent_change_24h && percent_change_24h < 0) {
    changeDigitColor = 'bg-price-low/40 px-[4px]';
  }

  return (
    <>
      <div className="p-1 flex flex-col w-full h-[118px] sm:w-[230px] bg-white/95 backdrop-blur-md backdrop-brightness-150 ">
        <div className="text-h3 w-fit font-medium">{name}</div>
        <div className="text-yellow text-body1 w-fit font-medium">${price}</div>
        <div className="flex gap-1 justify-between">
          <div className="flex flex-col w-[125px]">
            <div className={labelClass}>volume:</div>
            <div className={valueClass}>{volume_24h || '-'}</div>
          </div>
          <div className="flex flex-col">
            <div className={labelClass}>change:</div>
            <div className={`text-caption ${changeDigitColor} w-fit`}>
              {percent_change_24h || '-'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CoinCard);
