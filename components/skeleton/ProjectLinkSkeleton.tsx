import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ProjectLinksSkeleton = () => {
  return (
    <div className="bg-gray-50 shadow-md dark:bg-blue-950/20 rounded-xl space-y-2 flex flex-col p-3">
      <Skeleton className="h-6 w-48 mb-2" />
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-4 w-3/4 mb-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLinksSkeleton;