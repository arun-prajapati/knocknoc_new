"use client";
import { CircleX, Loader, Star } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import TypographyP from "../typography/TypographyP";
import CommonButton from "../common/CommonButton";
import { FavouritesDataType } from "@/types/types";
import { motion } from "framer-motion";

import { toast } from "sonner";
import { CurrentUserContext } from "@/context/CurrentUser";
import Link from "next/link";
import { favorite_api_action } from "@/app/actions/favorite";

const FavCard = ({ favData }: { favData: FavouritesDataType }) => {
  // --
  const currentUser = useContext(CurrentUserContext);
  // --
  const [loading, setloading] = useState(false);

  //  --fav status api call with optimistic--
  const favorite_api_fun = async () => {
    setloading(true);
    try {
      const categoryData = await favorite_api_action({
        ser_id: favData.ser_id.toString(),
        status: 0,
        user_firebase_id: currentUser?.user_token || "null",
      });

      // -
      toast.success(`${categoryData.message}`);
    } catch (error) {
      toast.error(`Something went wrong`);
    } finally {
      setloading(false);
    }
  };

  return (
    <motion.div
      exit={{ scale: 0.8, opacity: 0 }}
      className="fav_card relative w-full rounded-md shadow-[0px_0px_8px_lightgray] p-1"
      layout
    >
      {/* --loading-- */}
      {loading && (
        <div className="loading absolute top-0 left-0 z-10 rounded-md bg-foreground/60 h-full w-full grid place-content-center">
          <Loader className="animate-spin text-background" />
        </div>
      )}
      {/* --content-- */}
      <button
        onClick={favorite_api_fun}
        className="close_btn absolute -top-1.5 -right-1.5 bg-white z-20 rounded-full shadow-[0px_0px_3px_lightgray]"
      >
        <CircleX className="text-primary" />
      </button>
      <div className="image_box relative w-full aspect-square rounded-md overflow-hidden">
        <Image
          src={
            favData?.banner_image
              ? `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${favData?.banner_image}`
              : "/assets/no_image.webp"
          }
          alt={favData?.ser_name}
          fill
        />
      </div>
      <div className="info_box grid grid-cols-[auto,40px] gap-2 p-2">
        <TypographyP text={favData?.ser_name} css="name line-clamp-1" />
        <div className="rating text-sm flex pt-1  gap-0.5   items-start justify-end font-medium">
          <Star className="size-3 mt-1 fill-primary text-primary" />
          4.5
        </div>
        <TypographyP text={`$${favData?.price}`} css="font-semibold" />
        <div className="book_button col-span-2 flex justify-center">
          <Link href={`/${favData.cat_slug}/${favData.ser_slug}`}>
            <CommonButton text="Book Now" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FavCard;
