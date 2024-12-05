import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
  circle = false,
}) => {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: circle ? '50%' : undefined,
  };

  return <span className={`skeleton rounded-lg ${circle ? 'circle' : ''}`} style={style}></span>;
};

export default Skeleton;