import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProfilePageLoading = () => {
  return (
    <div className=" grid p-2">
      <Skeleton className=" w-full aspect-[16/12]" />
    </div>
  );
};

export default ProfilePageLoading;
