import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AuthPageLoading = () => {
  return (
    <div className="min-h-screen bg-primary  p-2 border-t border-primary-foreground">
      <Skeleton className="w-full max-w-lg mx-auto my-[10vh] aspect-square bg-slate-300" />
    </div>
  );
};

export default AuthPageLoading;
