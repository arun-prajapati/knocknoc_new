import React from "react";

import TypographyH1 from "@/components/typography/TypographyH1";

import TypographyH2 from "@/components/typography/TypographyH2";
import { Separator } from "@/components/ui/separator";
import TypographyH3 from "@/components/typography/TypographyH3";
import TypographyP from "@/components/typography/TypographyP";
import ServiceItemsSlider from "../components/ServiceItemsSlider";
import { ServiceDetailsType } from "@/types/types";

const ServiceDetailsSection = ({
  service_details,
}: {
  service_details: ServiceDetailsType;
}) => {
  return (
    <section className="service_details_section">
      <ServiceItemsSlider service_details={service_details} />

      {/* - */}
      <div className="info pt-4 grid grid-cols-[auto,70px] sm:grid-cols-[auto,120px] gap-3">
        <TypographyH1
          text={service_details.ser_name}
          css="productname text-base sm:text-lg lg:text-lg"
        />
        <div className="rating flex justify-end items-top gap-1 mt-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="size-5 fill-primary"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>

          <span>5.0(0)</span>
        </div>
        <TypographyH2 text={`$${service_details.price}`} />
      </div>
      <Separator className="my-4 sm:my-6" />
      {/* - */}

      <div className="desc">
        <TypographyH3
          text="Description"
          css="text-base sm:text-lg md:text-xl"
        />
        <TypographyP text={service_details.description} />
      </div>
      <Separator className="my-4  sm:hidden " />
    </section>
  );
};

export default ServiceDetailsSection;
