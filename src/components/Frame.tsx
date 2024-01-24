import React, { memo, ReactNode } from 'react';

interface FrameProps {
  content: ReactNode;
  title: string;
}

const Frame = ({ title, content }: FrameProps) => {
  return (
    <div className="border-4 border-main p-4 flex flex-col gap-4">
      <h3 className="text-h3">{title}</h3>
      {content}
    </div>
  );
};

export default memo(Frame);
