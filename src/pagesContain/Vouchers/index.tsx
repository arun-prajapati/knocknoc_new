import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import VoucherCard from "@/components/cards/VoucherCard";
import React from "react";
import ShowVouchersList from "./ShowVouchersList";

const Vouchers = () => {
  return (
    <div className="vouchers_action_page">
      <ProfilePagesWrapper heading="Vouchers">
        <ShowVouchersList />
      </ProfilePagesWrapper>
    </div>
  );
};

export default Vouchers;
