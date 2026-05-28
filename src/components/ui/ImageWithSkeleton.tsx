import React, { useState } from 'react';
import Skeleton from './Skeleton';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function ImageWithSkeleton({ 
  src, 
  alt, 
  className = '', 
  imageClassName = '', 
  referrerPolicy 
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 z-10 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}
