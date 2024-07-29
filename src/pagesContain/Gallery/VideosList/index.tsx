import TypographyH4 from "@/components/typography/TypographyH4";
import apihandler from "@/lib/apihandler";
import { GalleryDataTypes, categoryTypes } from "@/types/types";
import React from "react";
import ShowImages from "../components/ShowImages";
import ShowVideos from "../components/ShowVideos";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NoData from "@/components/common/NoData";

const VideosList = async ({
  params,
}: {
  params: { videos_show_category: string };
}) => {
  const videos_show_category = params.videos_show_category;

  // --fetch categories--
  const categoryData: { data: categoryTypes[] } = await apihandler({
    path: "/category",
    apiConfig: { method: "get" },
  });

  if (!categoryData?.data) {
    return <NoData />;
  }

  //   --get categiry id--
  const cat_id_get = categoryData.data.find(
    (f) => f.cat_slug === videos_show_category
  );

  // --fetch videos--
  const fetchVideos: { data: GalleryDataTypes[] } = await apihandler({
    path: "/gallery",
    apiConfig: {
      method: "POST",
      body: { cat_id: cat_id_get?.id, type: "video" },
    },
  });

  if (!fetchVideos?.data) {
    return <NoData />;
  }

  const filterVideos = fetchVideos.data.filter(
    (f) => f.type === "video" && f.cat_id === cat_id_get?.id.toString()
  );

  return (
    <>
      <Link
        href="/gallery/videos"
        className="items-center py-2 px-4 border  border-primary bg-primary/40 text-xs sm:text-sm inline-flex  rounded-lg  mb-4  "
      >
        <ArrowLeft className="size-4 sm:size-6" /> Back
      </Link>

      <ShowVideos videosData={filterVideos} />
    </>
  );
};

export default VideosList;
