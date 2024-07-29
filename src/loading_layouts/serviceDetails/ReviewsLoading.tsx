import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ReviewsLoading = () => {
  return (
    <div className="space-y-2 my-5">
      <Skeleton className="w-full h-10 p-2 flex" />
      <Skeleton className="w-full h-10 p-2 flex" />
      <Skeleton className="w-full h-10 p-2 flex" />
      <Skeleton className="w-full h-10 p-2 flex" />
      <Skeleton className="w-full h-10 p-2 flex" />
    </div>
  );
};

export default ReviewsLoading;
