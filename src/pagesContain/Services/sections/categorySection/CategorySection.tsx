// ==  call subcategory api and send data to CategoryListShow page that is a client page ==

import React, { Suspense } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

import apihandler from "@/lib/apihandler";
import { serviceCategoryTypes } from "@/types/types";
import TypographyH4 from "@/components/typography/TypographyH4";

import TypographyH3 from "@/components/typography/TypographyH3";
import Image from "next/image";
import CategoryListShow from "../../components/CategoryListShow";

const CategorySection = async ({
  current_category,
}: {
  current_category: Number;
}) => {
  const serviceCategoryData: { data: serviceCategoryTypes[] } =
    await apihandler({
      path: "/subcategory",
      apiConfig: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cat_id: current_category }),
      },
    });

  return (
    <section className="category_section my-5 sm:my-7 md:my-10">
      <div className="heading flex items-center gap-1 justify-center sm:mb-2">
        <TypographyH3 text="Category" css="font-medium text-primary" />
        <span className="block icon relative w-10 h-7">
          <Image
            src="/assets/paw_image_primary_color.webp"
            alt="paw_image_primary_color"
            fill={true}
          />
        </span>
      </div>
      {/* -CategorySlider- */}
      {!serviceCategoryData.data ? (
        <TypographyH4 text="Data Not Found!" css="py-5 text-center" />
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full border-y"
        >
          <CarouselContent>
            <Suspense fallback="laoding">
              <CategoryListShow
                serviceCategoryList={serviceCategoryData.data}
              />
            </Suspense>
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
};

export default CategorySection;
