import React from 'react';
import Skeleton from './Skeleton';

export default function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm flex flex-col h-[440px] overflow-hidden relative p-4">
      {/* Image Skeleton */}
      <Skeleton className="h-44 w-full rounded-[2rem] mb-4" />
      
      <div className="px-2 flex-1 flex flex-col">
        {/* Category & Duration */}
        <div className="flex justify-between mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        
        {/* Title */}
        <Skeleton className="h-8 w-3/4 mb-2" />
        
        {/* Instructor */}
        <Skeleton className="h-4 w-1/2 mb-6" />
        
        {/* Students & Price */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-7 h-7 rounded-full border-2 border-white" />
              ))}
            </div>
            <Skeleton className="h-8 w-16" />
          </div>
          
          {/* Button */}
          <Skeleton className="h-12 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
