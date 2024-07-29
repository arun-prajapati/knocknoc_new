import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ServicesLoading = () => {
  return (
    <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
      <Skeleton className="w-full aspect-square " />
    </div>
  );
};

export default ServicesLoading;
