import React, { memo } from 'react';

const CoinSkeleton = () => {
  return (
      <div className="border border-lightGrey p-1 flex flex-col animate-pulse w-[232px] h-[118px] gap-1">
      <div className="h-[32px] bg-lightGrey rounded" />
      <div className="h-[22px] bg-lightGrey rounded" />
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <div className="h-[16px] bg-lightGrey rounded" />
          <div className="h-[16px] bg-lightGrey rounded" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-[16px] bg-lightGrey rounded" />
          <div className="h-[16px] bg-lightGrey rounded" />
        </div>
      </div>
    </div>
  );
};

export default memo(CoinSkeleton);
