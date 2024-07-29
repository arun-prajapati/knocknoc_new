"use client";
import { InstagramDataType } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import ShowInstaPostModal from "./ShowInstaPostModal";
import { Play } from "lucide-react";

const ShowInstaPostsList = ({ data }: { data: InstagramDataType[] | [] }) => {
  const [instaPostModal, setinstaPostModal] = useState(false);
  const [fileUrl, setfileUrl] = useState("");
  const [fileType, setfileType] = useState("");
  return (
    <>
      {data?.map((post: InstagramDataType) => (
        <React.Fragment key={post.id}>
          {post.thumbnail_url && (
            <div
              title={post.caption}
              className=" w-full aspect-square   relative rounded-lg overflow-hidden border cursor-pointer"
              onClick={() => {
                setinstaPostModal(true);
                setfileUrl(post.media_url);
                setfileType(post.media_type);
              }}
            >
              <Image
                src={`${post.thumbnail_url}`}
                alt={post.caption}
                blurDataURL="/assets/loading_gif.gif"
                placeholder="blur"
                fill
                unoptimized
                sizes="(max-width: 768px) 50vw,(max-width: 768px) 35vw, (max-width: 1200px) 30vw, 20vw"
              />
              {post.media_type === "VIDEO" && (
                <span className="play_icon absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2   p-2 rounded-full border bg-primary/80 text-white">
                  <Play />
                </span>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
      <ShowInstaPostModal
        open={instaPostModal}
        setOpen={setinstaPostModal}
        fileUrl={fileUrl}
        setfileUrl={setfileUrl}
        fileType={fileType}
        setfileType={setfileType}
      />
    </>
  );
};

export default ShowInstaPostsList;
