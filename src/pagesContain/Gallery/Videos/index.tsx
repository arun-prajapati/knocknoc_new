import TypographyH4 from "@/components/typography/TypographyH4";
import apihandler from "@/lib/apihandler";
import { categoryTypes } from "@/types/types";
import React from "react";
import ShowVideoCategories from "../components/ShowVideoCategories";
import NoData from "@/components/common/NoData";

const Videos = async () => {
  // --get categories--
  const categoryData: { data: categoryTypes[] } = await apihandler({
    path: "/category",
    apiConfig: { method: "get" },
  });

  if (!categoryData?.data) {
    return <NoData />;
  }
  return (
    <div className="images_page pb-5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      <ShowVideoCategories categoriesData={categoryData?.data} />
    </div>
  );
};

export default Videos;
