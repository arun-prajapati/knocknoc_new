import React from "react";
import TypographyH4 from "../typography/TypographyH4";
import Link from "next/link";
import FavButton from "./FavButton";
import ImageWithFallback from "../common/ImageWithFallback";
import { cn } from "@/lib/utils";

const ServiceShowCard = ({
  image,
  rating,
  name,
  linkStatus,
  price,
  link,
  service_id,
  show_fav_button,
}: {
  image: string;
  rating: string;
  name: string;
  linkStatus: boolean;
  price: number;
  service_id: number;
  link: string;
  show_fav_button: boolean;
}) => {
  return (
    <div className="service_show_card w-full shadow-lg rounded-xl p-2 flex flex-col border border-primary-foreground hover:border hover:border-primary">
      <Link
        href={link}
        className="image_box block relative w-full aspect-[16/12] rounded-xl overflow-hidden"
      >
        <ImageWithFallback
          src={image}
          alt={name}
          fill={true}
          sizes="(min-width: 1700px) 232px, (min-width: 1420px) calc(20vw - 48px), (min-width: 1140px) calc(25vw - 49px), (min-width: 840px) calc(31.43vw - 29px), (min-width: 540px) 42.86vw, calc(100vw - 32px)"
          blurDataURL="/assets/loading_gif.gif"
          placeholder="blur"
        />
        <div className="rating_box absolute bottom-1 right-1 flex items-center gap-1 px-3 py-1 backdrop-blur-md bg-white/30 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-3 fill-primary"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="rating font-medium text-sm">{rating}</span>
        </div>
      </Link>
      <div
        className={cn(
          "content_box pt-3 px-1 flex-grow  grid grid-cols-[1fr,50px]",
          !show_fav_button && "grid-cols-[1fr]"
        )}
      >
        <div className="info space-y-2         flex flex-col justify-between">
          <TypographyH4 text={name} css="line-clamp-2 font-medium !text-base" />
          <div className="price flex items-center  text-xl md:text-2xl font-semibold text-primary">
            <span>${price}</span>
          </div>
        </div>
        {show_fav_button && (
          <div className="like flex justify-center items-start pt-1">
            <FavButton linkStatus={linkStatus} service_id={service_id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceShowCard;
