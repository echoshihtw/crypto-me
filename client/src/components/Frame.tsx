import React, { memo, ReactNode } from 'react';

interface FrameProps {
  content: ReactNode;
  title: string;
}

const Frame = ({ title, content }: FrameProps) => {
  return (
      <div className="p-4 flex flex-col gap-4 bg-white/40 backdrop-blur-md backdrop-brightness-125 h-full">
        <h3 className="text-h3 font-semibold">{title}</h3>
      {content}
    </div>
  );
};

export default memo(Frame);
