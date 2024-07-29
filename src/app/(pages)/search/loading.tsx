import { Skeleton } from "@/components/ui/skeleton";
import ActivityLoading from "@/loading_layouts/ActivityLoading";
import React from "react";

const SearchLoading = () => {
  return (
    <div className="2xl:container mx-auto py-10">
      <Skeleton className="w-full h-16 mb-3 p-2 flex" />
      <ActivityLoading />
    </div>
  );
};

export default SearchLoading;
