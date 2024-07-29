import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ActivityPageLoading = () => {
  return (
    <div className="w-full 2xl:container py-2">
      <Skeleton className=" w-full max-w-sm h-10 mx-auto mb-3" />
      <div className="w-full 2xl:container grid p-2 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 md:gap-6">
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
        <Skeleton className=" w-full aspect-[16/12]" />
      </div>
    </div>
  );
};

export default ActivityPageLoading;
