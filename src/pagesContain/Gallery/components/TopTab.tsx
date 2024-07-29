"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

const TopTab = () => {
  const pathname = usePathname();
  return (
    <div className="top_tab  max-w-md m-auto p-2 rounded-lg bg-background shadow-lg grid grid-cols-2 relative md:-top-4">
      <Link
        href="/gallery/images"
        className={cn(
          "bg-background text-foreground p-2 rounded-lg text-center font-medium text-base sm:text-lg",
          pathname.includes("/images") && "bg-primary text-primary-foreground"
        )}
      >
        Images
      </Link>
      <Link
        href="/gallery/videos"
        className={cn(
          "bg-background text-foreground p-2 rounded-lg text-center font-medium text-base sm:text-lg",
          pathname.includes("/videos") && "bg-primary text-primary-foreground"
        )}
      >
        Videos
      </Link>
    </div>
  );
};

export default TopTab;
