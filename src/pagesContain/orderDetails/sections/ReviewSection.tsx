import ReviewForm from "@/components/review/ReviewForm";
import TypographyP from "@/components/typography/TypographyP";
import { OrderDataType } from "@/types/types";
import React from "react";

const ReviewSection = ({ order_data }: { order_data: OrderDataType }) => {
  return (
    <div className="give_review">
      <TypographyP
        text="Give Your Feedback"
        css="text-primary !text-lg font-semibold"
      />
      <ReviewForm
        order_id={order_data.id?.toString()}
        ser_id={order_data.ser_id?.toString()}
      />
    </div>
  );
};

export default ReviewSection;
