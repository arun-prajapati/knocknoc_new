import TypographyP from "@/components/typography/TypographyP";
import { Separator } from "@/components/ui/separator";
import { OrderDataType } from "@/types/types";
import React from "react";

const BillingSection = ({ order_data }: { order_data: OrderDataType }) => {
  const add_on_price =
    order_data?.additional_services &&
    order_data?.additional_services?.length > 0
      ? order_data.additional_services.reduce(
          (acc, cur) => acc + Number(cur.price),
          0
        )
      : 0;

  return (
    <div className="billing_details">
      <TypographyP
        text="Billing Details"
        css="text-primary !text-lg font-semibold"
      />
      <div className="item flex gap-2">
        <TypographyP text="Service Price" css="flex-grow" />
        <TypographyP text={`$${order_data.ser_price}`} />
      </div>
      <div className="item flex gap-2">
        <TypographyP text="Add-on Price" css="flex-grow" />
        <TypographyP text={`$${add_on_price}`} />
      </div>
      <Separator className="my-2" />
      <div className="item flex gap-2">
        <TypographyP text="Total Price" css="flex-grow font-semibold" />
        <TypographyP text={`$${order_data.ser_price + add_on_price}`} />
      </div>
    </div>
  );
};

export default BillingSection;
