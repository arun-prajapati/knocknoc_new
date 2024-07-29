"use client";
import TypographyP from "@/components/typography/TypographyP";
import { ServiceBookDetailsGetContext } from "@/context/ServiceBook";
import { ServiceDetailsType } from "@/types/types";
import React, { useContext } from "react";

const PriceDetails = ({
  service_details,
}: {
  service_details: ServiceDetailsType;
}) => {
  // --store order details context--
  const { data: serviceBookData } = useContext(ServiceBookDetailsGetContext);

  return (
    <div className="price_details space-y-3 ">
      <div className="item flex items-center gap-2 justify-between">
        <TypographyP text="Discount Price" css="opacity-70" />
        <TypographyP
          text={`-$${serviceBookData?.discount_amount.toFixed(2)}`}
          css="opacity-70"
        />
      </div>
      <div className="item flex items-center gap-2 justify-between">
        <TypographyP text="Service Price" css="opacity-70" />
        <TypographyP
          text={`$${service_details?.price || 0}`}
          css="opacity-70"
        />
      </div>
      <div className="item flex items-center gap-2 justify-between">
        <TypographyP text="Total Price" css="opacity-70" />
        <TypographyP
          text={`$${serviceBookData?.total_amount}`}
          css="opacity-70"
        />
      </div>
    </div>
  );
};

export default PriceDetails;
