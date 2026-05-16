import Skeleton from './Skeleton';

export default function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-[2rem] border border-black/5 shadow-sm flex flex-col overflow-hidden">
      <div className="p-3 pb-0">
        <Skeleton className="h-44 w-full rounded-[1.5rem]" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between mb-3">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-7 w-3/4 mb-1.5" />
        <Skeleton className="h-4 w-1/2 mb-5" />
        <div className="mt-auto">
          <div className="flex justify-between mb-5">
            <Skeleton className="h-5 w-24" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-14" />
              <Skeleton className="h-5 w-10" />
            </div>
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
