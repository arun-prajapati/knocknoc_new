"use client";

import { GalleryDataTypes } from "@/types/types";
import Image from "next/image";

import React, { useState } from "react";
import ImageShowModel from "./ImageShowModel";
import ImageWithFallback from "@/components/common/ImageWithFallback";

const ShowImages = ({ imagesData }: { imagesData: GalleryDataTypes[] }) => {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  //   --open img model--
  const openImgModel = (url: string) => {
    setOpen(true);
    setImgUrl(url);
  };
  return (
    <>
      {imagesData?.map((e) => (
        <span
          key={`${e.id}_image`}
          className="block relative w-full aspect-square rounded-lg overflow-hidden"
          onClick={() =>
            openImgModel(
              `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e.file && e.file[0]}`
            )
          }
        >
          <ImageWithFallback
            src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${
              e.file && e.file[0]
            }`}
            alt={`${e.name}`}
            fill
            loading="lazy"
            blurDataURL="/assets/loading_gif.gif"
            placeholder="blur"
          />
        </span>
      ))}
      <ImageShowModel imgUrl={imgUrl} open={open} setOpen={setOpen} />
    </>
  );
};

export default ShowImages;
