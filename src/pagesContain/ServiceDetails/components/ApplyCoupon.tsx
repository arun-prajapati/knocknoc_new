"use client";

import TypographySmall from "@/components/typography/TypographySmall";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CurrentUserContext } from "@/context/CurrentUser";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import apihandler from "@/lib/apihandler";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type CouponFormDataType = {
  coupon: string;
};
const ApplyCoupon = () => {
  // --current user--
  const current_user = useContext(CurrentUserContext);

  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = useContext(
    ServiceBookDetailsGetContext
  );

  // --
  const { register, handleSubmit } = useForm<CouponFormDataType>({
    defaultValues: {
      coupon: serviceBookData.coupon?.code ?? "",
    },
  });

  // --get coupon--
  const submitCoupon: SubmitHandler<CouponFormDataType> = async (data) => {
    if (!current_user?.user_token) {
      toast.error("For apply coupon, please log in to your account. ");
      return;
    }
    try {
      const coupon_api_result = await apihandler({
        path: "/coupon",
        apiConfig: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cat_id: "-1",
            code: data.coupon,
            user_firebase_id: current_user?.user_token ?? "",
          }),
        },
      });

      // --
      ServiceBookDispatch &&
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_COUPON,
          payload: {
            id: coupon_api_result.data?.id?.toString(),
            type: coupon_api_result.data?.type,
            value: coupon_api_result.data?.value,
            code: coupon_api_result.data?.code,
          },
        });

      if (coupon_api_result.status === 200) {
        toast.success(coupon_api_result.message || "Get Coupon");
      } else {
        toast.error(coupon_api_result.message || "Invalid Coupon");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="wallet_amount border-2 rounded-lg p-2 sm:p-3">
      <TypographySmall text="Apply Coupon" css="opacity-70 " />
      <form className="mt-2" onSubmit={handleSubmit(submitCoupon)}>
        <div className="field flex gap-2 items-center">
          <Input
            placeholder="Enter your coupon code"
            {...register("coupon", { required: "Please add coupon" })}
          />
          <Button>Add</Button>
        </div>
      </form>
      {serviceBookData.coupon?.value && (
        <TypographySmall
          css="text-red-400 pt-1 ps-3"
          text={`You Got ${serviceBookData.coupon?.value}% discount`}
        />
      )}
    </div>
  );
};

export default ApplyCoupon;
