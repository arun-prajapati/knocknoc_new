// import BannerSlider from "@/pagesContain/Home/components/BannerSlider";
import TypingBox from "@/components/typingBox/TypingBox";
import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import Image from "next/image";
import Services from "../services/Services";
// import { BannerLoading } from "@/loading_layouts/BannerLoading";

const HeroSection = () => {
  return (
    <section className="hero_section bg-primary text-primary-foreground mt-7 p-3 sm:p-7 lg:p-10 rounded-xl">
      {/* -content box- */}
      <div className="contentBox pb-20 gap-3 grid md:grid-cols-2 mb-10 sm:mb-5 md:mb-0">
        <div className="info space-y-1 sm:space-y-3 relative p-4">
          <span className="paw_flot_img absolute w-10 aspect-[16/12]  -top-0 -left-0 md:w-14 md:aspect-[16/12]  md:-top-2 md:-left-2">
            <Image
              src="/assets/paw_big_image.webp"
              fill={true}
              alt="paw_big_img"
              sizes="100px"
            />
          </span>
          <TypographyH1 text="Hi Cat" />
          <TypographyH2 text="How can we help you today?" />
          <div className="animationTextBox  max-w-sm relative top-3">
            <Image
              src="/assets/knoc_knoc_logo.webp"
              width={80}
              height={40}
              alt="logo"
            />
            <div className="absolute bg-foreground/10 top-5 left-10 p-2 w-[90%] rounded-lg">
              <TypingBox />
            </div>
          </div>
        </div>
        <div className="banners hidden md:block">
          <div className="banner_wraper max-w-lg mx-auto rounded-lg overflow-hidden">
            {/* <Suspense fallback={<BannerLoading />}>
              <BannerSlider
                banners={[
                  "https://picsum.photos/200/300",
                  "https://picsum.photos/id/237/200/300",
                  "https://picsum.photos/seed/picsum/200/300",
                ]}
              />
            </Suspense> */}
          </div>
        </div>
      </div>
      {/* -services slider- */}
      <div className="services">
        <Services />
      </div>
    </section>
  );
};

export default HeroSection;
