import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HeroSectionLoading = () => {
  return (
    <Skeleton className="min-h-[70vh] w-full aspect-[16/6] p-[3%] flex flex-col justify-between">
      <div className="space-y-4">
        <Skeleton className="w-2/3 sm:w-1/3 h-5 bg-slate-300" />
        <Skeleton className="w-2/4 sm:w-1/4 h-3 bg-slate-300" />
        <Skeleton className="w-2/4 sm:w-1/4 h-20 bg-slate-300" />
      </div>
      <div className="cards w-full flex overflow-auto  gap-3 md:gap-6 no-scrollbar">
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
        <Skeleton className="min-w-[150px] sm:min-w-[200px] aspect-square bg-slate-300" />
      </div>
    </Skeleton>
  );
};

export default HeroSectionLoading;
