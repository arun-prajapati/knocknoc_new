import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ActivityLoading = () => {
  return (
    <div className=" grid p-2 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 md:gap-6">
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
      <Skeleton className=" w-full aspect-[16/12]" />
      <Skeleton className=" w-full aspect-[16/12]" />
      <Skeleton className=" w-full aspect-[16/12]" />
    </div>
  );
};

export default ActivityLoading;
