import TypographyH4 from "@/components/typography/TypographyH4";
import { categoryTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowVideoCategories = ({
  categoriesData,
}: {
  categoriesData: categoryTypes[];
}) => {
  return (
    <>
      {categoriesData?.map((e) => (
        <Link
          className="category_card"
          href={`/gallery/videos/${e.cat_slug}`}
          key={`${e.id}_video_category`}
        >
          <div className="image_box relative w-full aspect-square bg-primary/35 rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e.image}`}
              alt={`${e.cat_name}`}
              fill
              loading="lazy"
              blurDataURL="/assets/loading_gif.gif"
              placeholder="blur"
            />
          </div>
          <TypographyH4 text={e.cat_name} />
        </Link>
      ))}
    </>
  );
};

export default ShowVideoCategories;
