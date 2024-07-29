import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const GalleryPageLoading = () => {
  return (
    <div className="w-full   2xl:container  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
      <Skeleton className="w-full aspect-square bg-slate-300" />
    </div>
  );
};

export default GalleryPageLoading;
