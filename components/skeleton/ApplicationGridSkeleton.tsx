import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ApplicationGridSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="rounded overflow-hidden shadow-lg bg-white p-4">
                        <Skeleton className="w-16 h-16 rounded-full mb-4" />
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="flex justify-end mt-4">
                            <Skeleton className="h-5 w-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationGridSkeleton;