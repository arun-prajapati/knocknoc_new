import TypographyP from "@/components/typography/TypographyP";
import { OrderDataType } from "@/types/types";
import React from "react";

const DetailsSection = ({ order_data }: { order_data: OrderDataType }) => {
  return (
    <div className="ser_details space-y-2">
      <div className="name flex gap-2 ">
        <TypographyP text="Name" css="font-semibold whitespace-nowrap w-32" /> -
        <TypographyP text={order_data.ser_name} />
      </div>
      <div className="category flex gap-2">
        <TypographyP
          text="Category"
          css="font-semibold whitespace-nowrap w-32"
        />{" "}
        -
        <TypographyP text={order_data.cat_name} />
      </div>
      {/* -- */}
      <div className="subcategory flex gap-2">
        <TypographyP
          text="Sub Category"
          css="font-semibold whitespace-nowrap w-32"
        />{" "}
        -
        <TypographyP text={order_data.subcat_name} />
      </div>
      {/* -- */}
      <div className="invoice_no flex gap-2">
        <TypographyP
          text="Invoice No."
          css="font-semibold whitespace-nowrap w-32"
        />{" "}
        -
        <TypographyP text={order_data.invoice_no} />
      </div>
      {/* -- */}
      <div className="DATE flex gap-2">
        <TypographyP text="Date" css="font-semibold whitespace-nowrap w-32" /> -
        <TypographyP text={order_data.date} />
      </div>
      {/* -- */}
      <div className="time flex gap-2">
        <TypographyP text="Time" css="font-semibold whitespace-nowrap w-32" /> -
        <TypographyP text={order_data.time} />
      </div>
      {/* -- */}
      <div className="Desc flex gap-2">
        <TypographyP
          text="Description"
          css="font-semibold whitespace-nowrap w-32"
        />{" "}
        -
        <TypographyP text={order_data.ser_description} />
      </div>
    </div>
  );
};

export default DetailsSection;
