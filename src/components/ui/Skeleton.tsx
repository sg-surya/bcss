import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  key?: React.Key;
}

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded-md ${className}`} 
      {...props}
    />
  );
}
