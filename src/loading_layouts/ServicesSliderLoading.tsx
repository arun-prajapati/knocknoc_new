import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ServicesSliderLoading = () => {
  return (
    <div className="flex ps-5 my-5 gap-10 overflow-hidden">
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
      <Skeleton className="min-w-[150px] sm:min-w-[200px] bg-gray-300 w-full aspect-square" />
    </div>
  );
};

export default ServicesSliderLoading;
