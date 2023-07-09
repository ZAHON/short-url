import { Skeleton } from '@/components';

const linkCardSkeletons = Array.from(Array(5).keys());

export default function Loading() {
  return (
    <>
      <div className="h-[11.25rem] flex-shrink-0 rounded-lg border border-accent-2 bg-white p-4 drop-shadow-sm lg:sticky lg:top-[4.5rem] lg:z-30 lg:h-[180px] lg:w-80">
        <Skeleton className="h-full rounded-lg" />
      </div>
      <div className="flex flex-1 flex-col gap-y-4">
        {linkCardSkeletons.map((linkCardSkeleton) => (
          <div
            key={linkCardSkeleton}
            className="flex items-center justify-between gap-x-4 rounded-lg border border-accent-2 bg-white p-4 drop-shadow-sm"
          >
            <div className="flex items-center gap-x-4 overflow-hidden">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-0.5">
                  <Skeleton className="h-5 w-32 rounded-lg" />
                  <Skeleton className="h-5 w-48 rounded-lg" />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <Skeleton className="h-4 w-24 rounded-lg" />
                  <Skeleton className="h-4 w-28 rounded-lg" />
                </div>
              </div>
            </div>
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        ))}
      </div>
    </>
  );
}
