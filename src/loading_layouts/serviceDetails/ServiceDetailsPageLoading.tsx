import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ReviewsLoading from "./ReviewsLoading";

const ServiceDetailsPageLoading = () => {
  return (
    <div className="w-full  p-2 sm:p-4 xl:py-6 2xl:container space-y-3">
      <Skeleton className="w-full h-20 p-2 flex" />
      <div className="grid gap-2">
        <div className="grid gap-2 sm:grid-cols-2">
          <Skeleton className="w-full min-h-64 aspect-video" />
          <Skeleton className="w-full min-h-40 aspect-video" />
        </div>
        <Skeleton className="w-full md:w-1/2 h-20 p-2 flex" />
        <Skeleton className="w-full md:w-1/2 h-20 p-2 flex" />
        <Skeleton className="w-full md:w-1/2 h-20 p-2 flex" />
      </div>
    </div>
  );
};

export default ServiceDetailsPageLoading;
