import Skeleton from './Skeleton';

export default function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm flex flex-col overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-1 w-1 rounded-full" />
          <Skeleton className="h-3 w-12" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-auto" />
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/5">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
    </div>
  );
}
