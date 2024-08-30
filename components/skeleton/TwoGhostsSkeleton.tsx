import { Skeleton } from "@/components/ui/skeleton";

export function TwoGhostsSkeleton() {
  return (
    <div className="pt-4 pb-6 flex space-y-2 flex-col">
      <div className="h-10 w-32 my-6" >
        <h1 className="text-4xl text-sky-500 w-fit font-bold ">Projects</h1>
      </div>
      <div className="rounded-xl w-full h-auto md:grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="h-6 w-40 mt-4" />
    </div>
  );
}

export default TwoGhostsSkeleton;
