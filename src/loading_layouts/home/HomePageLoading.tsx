import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import HeroSectionLoading from "./HeroSectionLoading";
import ReviewsSectionLoading from "./ReviewsSectionLoading";

const HomePageLoading = () => {
  return (
    <div className="space-y-6 py-10 2xl:container px-2">
      <HeroSectionLoading />
      <ReviewsSectionLoading />
    </div>
  );
};

export default HomePageLoading;
