import VoucherCard from "@/components/cards/VoucherCard";
import apihandler from "@/lib/apihandler";
import { VoucherDataType } from "@/types/types";
import { cookies } from "next/headers";
import React from "react";

const ShowVouchersList = async () => {
  // --fetch addresses--
  const get_vouchers: { data: VoucherDataType[] } = await apihandler({
    path: "/coupon_list",
  });

  // --show page--
  if (!get_vouchers || !get_vouchers.data) {
    return "data not found";
  }
  if (get_vouchers && get_vouchers.data.length < 1) {
    return "address not created";
  }

  return (
    <div className="show_vopuchers grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
      {get_vouchers?.data?.map((e) => (
        <React.Fragment key={`${e.id}_voucher_item`}>
          <VoucherCard voucherData={e} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShowVouchersList;
