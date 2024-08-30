import { Skeleton } from "@/components/ui/skeleton";

export function GetSingleProjectsSkeleton() {
  return (
    <div className="pt-4 pb-8 flex space-y-6 flex-col border-b-sky-200">
      <Skeleton className="h-10 w-40 mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="h-6 w-56 mt-2" />
    </div>
  );
}

export default GetSingleProjectsSkeleton;
