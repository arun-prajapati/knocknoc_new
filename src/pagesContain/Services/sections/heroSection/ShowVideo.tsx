"use client";

import { useEffect, useState } from "react";

const ShowVideo = ({ videoLink }: { videoLink: string }) => {
  const [video_url, setvideo_url] = useState("");
  useEffect(() => {
    videoLink && setvideo_url(videoLink);
  }, [videoLink]);
  return (
    <video
      playsInline
      className="w-full aspect-[16/9] max-w-[500px] rounded-lg m-auto object-cover"
      autoPlay
      muted
      loop
      key={video_url}
    >
      <source
        src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${video_url}`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default ShowVideo;
