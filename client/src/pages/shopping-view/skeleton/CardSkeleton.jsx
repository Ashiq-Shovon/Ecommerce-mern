import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CardSkeleton = ({ count }) => {
  return (
    <>
      {Array(count).fill(0).map((item, id) => {
        return (
          <div key={id} className="mt-4">
            <div className="flex flex-col space-y-3 border-2 rounded-md p-4">
              <Skeleton className="h-[225px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardSkeleton;
