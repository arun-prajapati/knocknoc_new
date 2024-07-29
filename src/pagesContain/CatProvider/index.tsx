import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import CommonButton from "@/components/common/CommonButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatProvider = () => {
  return (
    <div className="referrals_action_page">
      <ProfilePagesWrapper heading="Referrals">
        <div className="content">
          <div className="banner relative w-full aspect-[16/7]">
            <Image
              src="/assets/cat_provider_banner.webp"
              alt="wallet_banner"
              fill
            />
          </div>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdutcAPuvm1g37QExqthsmt9uB14MuUKWYYRbSsBv_J7ToUEw/viewform">
            <CommonButton text="Join Us" />
          </Link>
        </div>
      </ProfilePagesWrapper>
    </div>
  );
};

export default CatProvider;
