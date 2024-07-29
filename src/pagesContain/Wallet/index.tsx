import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import Image from "next/image";
import PriceShowBox from "./components/PriceShowBox";

const Wallet = () => {
  return (
    <div className="wallet_page">
      <ProfilePagesWrapper heading="Wallet">
        <div className="banner relative w-full aspect-[16/7]">
          <Image
            src="/assets/referrals section image.webp"
            alt="wallet_banner"
            fill
          />
        </div>
        <PriceShowBox />
      </ProfilePagesWrapper>
    </div>
  );
};

export default Wallet;
