import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SubCategoriesLoading = () => {
  return (
    <div className="flex gap-4 overflow-auto no-scrollbar  ">
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
      <Skeleton className="min-w-40 h-10" />
    </div>
  );
};

export default SubCategoriesLoading;
