import Image from "next/image";
import React from "react";
import TypographyH4 from "../typography/TypographyH4";
import { cn } from "@/lib/utils";

const NoData = ({
  text = "Data Not Available",
  css,
}: {
  text?: string;
  css?: string;
}) => {
  return (
    <div className={cn("no_data w-full max-w-lg m-auto text-center p-2 ", css)}>
      <div className="img_box relative w-full aspect-square">
        <Image
          src="/assets/nodata.webp"
          width={500}
          height={500}
          alt="nodata image"
          className="h-full w-full"
        />
      </div>
      <TypographyH4 text={text} />
    </div>
  );
};

export default NoData;
