"use client";
import TypographyP from "@/components/typography/TypographyP";
import { GalleryDataTypes } from "@/types/types";
import React, { useState } from "react";
import VideoShowModel from "./VideoShowModel";
import NoData from "@/components/common/NoData";

const ShowVideos = ({ videosData }: { videosData: GalleryDataTypes[] }) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  //   --open img model--
  const openVideoModel = (url: string) => {
    setOpen(true);
    setVideoUrl(url);
  };

  if (videosData.length < 1) {
    return <NoData text="videos not available" />;
  }

  return (
    <div className="images_page pb-5 columns-2 md:columns-3 xl:columns-4 2xl:columns-5   space-y-2   ">
      {videosData?.map((e) => (
        <div
          className="video_box border rounded-lg p-2 grid gap-2 break-inside-avoid"
          key={`${e.id}_video_List_item`}
        >
          <video
            src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${
              e.file && e.file[0]
            }`}
            className="w-full min-h-28 rounded-lg bg-gray-100 bg-[url('/assets/loading_gif.gif')] "
            style={{ backgroundPosition: "center" }}
            onClick={() =>
              openVideoModel(
                `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${
                  e.file && e.file[0]
                }`
              )
            }
          />
          <TypographyP text={e.name} />
        </div>
      ))}
      <VideoShowModel videoUrl={videoUrl} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ShowVideos;
