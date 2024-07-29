import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import TypographyH4 from "@/components/typography/TypographyH4";
import TypographyP from "@/components/typography/TypographyP";
import Image from "next/image";
import React from "react";
import ShareButton from "./ShareButton";

const Referrals = () => {
  return (
    <div className="referrals_action_page">
      <ProfilePagesWrapper heading="Referrals">
        <div className="content">
          <div className="banner relative w-full aspect-[16/7]">
            <Image
              src="/assets/referrals section image.webp"
              alt="wallet_banner"
              fill
            />
          </div>
          <div className="price text-center text-xl sm:text-3xl md:text-4xl font-semibold my-5 text-primary">
            Earn $5.00
          </div>
          <TypographyH4
            text="For each friend you invite to KNOC KNOC"
            css="text-center mb-2"
          />
          <TypographyP
            text="Your friend get $5.00 off their first service when they use your link to sign up and you will receive a $5.00 off voucher"
            css="text-center m-auto mb-2 max-w-lg "
          />
          <ShareButton />
        </div>
      </ProfilePagesWrapper>
    </div>
  );
};

export default Referrals;
