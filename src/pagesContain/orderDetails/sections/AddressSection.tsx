import TypographyP from "@/components/typography/TypographyP";
import { OrderDataType } from "@/types/types";
import React from "react";

const AddressSection = ({ order_data }: { order_data: OrderDataType }) => {
  return (
    <div className="address">
      {order_data.address && (
        <>
          <TypographyP
            text="Address"
            css="text-primary !text-lg font-semibold"
          />
          <TypographyP
            text={`${order_data.address?.house_no}, ${order_data.address?.street}, ${order_data.address?.area_city}, ${order_data.address?.state}-${order_data.address?.post_code}`}
          />
        </>
      )}
    </div>
  );
};

export default AddressSection;
