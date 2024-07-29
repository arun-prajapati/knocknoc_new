import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import TypographyP from "@/components/typography/TypographyP";
import { Quote } from "lucide-react";
import apihandler from "@/lib/apihandler";
import { ReviewDataType } from "@/types/types";
import NoData from "@/components/common/NoData";

const ReviewSection = async () => {
  // --
  const reviews_get: { data: ReviewDataType[] } = await apihandler({
    path: "/get_review",
    apiConfig: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  // --

  if (!reviews_get || !reviews_get?.data) {
    return <NoData />;
  }

  return (
    <section className="review_section my-10 lg:my-16">
      <Carousel className="w-full relative bg-primary text-primary-foreground px-3 sm:px-5 md:px-7 xl:px-10  py-14 xl:py-20     rounded-lg border-4 border-primary-foreground shadow-[0px_0px_10px_lightgray]">
        <CarouselContent>
          {reviews_get?.data?.map((item, index) => (
            <CarouselItem key={`${item.id}_review`}>
              <div className="review_card grid  grid-cols-1 sm:grid-cols-[40%,1fr] items-center   gap-10 w-full ">
                <div className="image relative w-40 md:w-52 xl:w-60 m-auto md:ms-10 lg:ms-20  aspect-square rounded-full overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${item.image}`}
                    alt="review-image"
                    fill={true}
                    sizes="(min-width: 1280px) 240px, (min-width: 780px) 208px, 160px"
                  />
                </div>
                <div className="content relative sm:px-5 text-center sm:text-start flex gap-1 sm:gap-3">
                  <span className="icon">
                    <Quote />
                  </span>
                  <div className="review">
                    <TypographyP
                      text={item.name}
                      css="text-xl font-medium captlize mb-3 select-none"
                    />
                    <TypographyP text={item.review} css="select-none" />
                  </div>
                  <span className="icon grid items-end ">
                    <Quote />
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[7%] sm:bottom-[10%] lg:bottom-[15%] right-[10%] w-full max-w-[80px]">
          <CarouselPrevious className="-left-[0%] top-[0%]   -translate-y-0   bg-transparent" />
          <CarouselNext className="-right-[0%]  top-[-%] -translate-y-0 bg-transparent" />
        </div>
      </Carousel>
    </section>
  );
};

export default ReviewSection;
