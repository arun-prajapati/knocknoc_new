import { OrderDataType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ImageSection = ({ order_data }: { order_data: OrderDataType }) => {
  return (
    <div className="service_image relative w-full aspect-[16/12] rounded-lg overflow-hidden">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${order_data.ser_image}`}
        alt="sadf"
        fill
        blurDataURL="/assets/loading_gif.gif"
        placeholder="blur"
      />
    </div>
  );
};

export default ImageSection;
