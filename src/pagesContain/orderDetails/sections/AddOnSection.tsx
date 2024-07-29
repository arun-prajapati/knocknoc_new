import TypographyP from "@/components/typography/TypographyP";
import { OrderDataType } from "@/types/types";
import React from "react";

const AddOnSection = ({ order_data }: { order_data: OrderDataType }) => {
  return (
    <div className="add_ons">
      {order_data?.additional_services &&
        order_data?.additional_services?.length > 0 && (
          <>
            <TypographyP
              text="Add-on Details"
              css="text-primary !text-lg font-semibold"
            />
            {order_data?.additional_services?.map((e) => (
              <React.Fragment key={`${e.id}_order_details_add_on_item`}>
                <div className="item flex gap-6">
                  <TypographyP
                    text="Name"
                    css="flex-grow min-w-sm   whitespace-nowrap"
                  />
                  <TypographyP text={e.additional_ser_name} />
                </div>
              </React.Fragment>
            ))}
          </>
        )}
    </div>
  );
};

export default AddOnSection;
