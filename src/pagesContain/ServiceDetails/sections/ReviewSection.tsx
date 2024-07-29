import ReviewCard from "@/components/cards/ReviewCard";
import TypographyH4 from "@/components/typography/TypographyH4";
import { Separator } from "@/components/ui/separator";
import apihandler from "@/lib/apihandler";
import { ReviewGetDataType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ReviewSection = async ({ services_id }: { services_id: string }) => {
  const ratings_get: { data: ReviewGetDataType[] } = await apihandler({
    path: "/get_rating",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sr_id: services_id,
        ser_slug: "",
        user_firebase_id: "",
      }),
    },
  });

  if (!ratings_get || !ratings_get?.data) {
    return (
      <div className="nowReviewBox flex items-center gap-2  pb-2 pt-10">
        <Image
          src={"/assets/knoc_knoc_logo.webp"}
          alt="logo_img"
          width={70}
          height={70}
        />
        <span>Reviews Not Available</span>
      </div>
    );
  }
  if (ratings_get.data.length < 1) {
    return (
      <div className="nowReviewBox flex items-center gap-2  pb-2 pt-10">
        <Image
          src={"/assets/knoc_knoc_logo.webp"}
          alt="logo_img"
          width={70}
          height={70}
        />
        <span>Reviews Not Available</span>
      </div>
    );
  }

  return (
    <>
      <section className="review_section space-y-4">
        <Separator className="my-4 sm:my-6" />
        <TypographyH4 text="Review" css="text-base sm:text-lg md:text-xl" />
        {ratings_get.data?.map((e) => (
          <ReviewCard
            key={`${e.id}_${services_id}_review_item`}
            name={e.username}
            rating={e.rating}
            review={e.review}
            time={e.created_at}
          />
        ))}
      </section>
    </>
  );
};

export default ReviewSection;
