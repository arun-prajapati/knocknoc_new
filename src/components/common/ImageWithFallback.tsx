"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type IProps = { fallback?: string } & ImageProps;

const ImageWithFallback = ({ fallback, alt, src, ...props }: IProps) => {
  const [error, setError] = useState(false);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? "/assets/no_image.webp" : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
