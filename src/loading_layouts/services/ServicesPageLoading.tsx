import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import HeroSectionLoading from "./HeroSectionLoading";
import SubCategoriesLoading from "./SubCategoriesLoading";
import ServicesLoading from "./ServicesLoading";

const ServicesPageLoading = () => {
  return (
    <div className="w-full  p-2 sm:p-4 xl:py-6 2xl:container space-y-3">
      <HeroSectionLoading />
      <div className="grid gap-2 py-10 space-y-2">
        <SubCategoriesLoading />
        <ServicesLoading />
      </div>
    </div>
  );
};

export default ServicesPageLoading;
