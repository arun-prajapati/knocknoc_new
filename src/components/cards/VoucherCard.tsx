"use client";
import React, { useRef } from "react";
import TypographyH3 from "../typography/TypographyH3";
import { VoucherDataType } from "@/types/types";
import { toast } from "sonner";

const VoucherCard = ({ voucherData }: { voucherData: VoucherDataType }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(voucherData?.code);
    toast.success("Copied!");
  };
  return (
    <div className="  bg-gradient-to-r from-primary to-primary/70 text-primary-foreground p-4 lg:p-8 rounded-lg shadow-lg">
      <TypographyH3 text="Special Offer!" />
      <div className="text-base sm:text-lg mb-2">
        Get{" "}
        <span className="text-yellow-400 font-bold">
          {voucherData?.value}% OFF
        </span>{" "}
        your next purchase!
      </div>
      <div className="text-base">Use coupon code:</div>

      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-lg sm:text-xl font-semibold">
          {voucherData?.code}
        </span>
        <button
          onClick={copyCode}
          className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Copy
        </button>
      </div>
      <div className="text-sm mt-2">
        <p>
          Valid until{" "}
          <span className="font-semibold">{voucherData?.expire}</span>, Only{" "}
          <span className="font-semibold"> {voucherData?.coupon_use}</span>{" "}
          Coupon left
        </p>
        <p>Terms and conditions apply.</p>
      </div>
    </div>
  );
};

export default VoucherCard;
