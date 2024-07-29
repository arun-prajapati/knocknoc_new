import TypographyH3 from "@/components/typography/TypographyH3";
import Image from "next/image";
import ServicesSlider from "../../components/ServicesSlider";
import { Suspense } from "react";
import ServicesSliderLoading from "@/loading_layouts/ServicesSliderLoading";

const Services = () => {
  return (
    <section className="bg-primary-foreground text-primary p-3 sm:p-5 rounded-lg relative">
      {/* --knoc Knoc Payment Methods banner-- */}
      <div className="payment_banner w-[150px] sm:w-[200px] lg:w-[250px] aspect-[16/4]  absolute -top-5 left-[5%]">
        <Image
          src="/assets/knoc Knoc Payment Methods banner.webp"
          alt="knoc Knoc Payment Methods banner"
          fill
          sizes="(max-width:767px):150px,(max-width:1000px):200px,250px"
        />
      </div>
      {/* -- */}
      <div className="heading flex items-center gap-1 justify-center sm:mb-2">
        <TypographyH3 text="Our Services" css="font-medium" />
        <span className="block icon relative w-7 h-5">
          <Image
            src="/assets/paw_image_primary_color.webp"
            alt="paw_image_primary_color"
            fill={true}
            sizes="40px"
          />
        </span>
      </div>
      {/* -slider- */}
      <Suspense fallback={<ServicesSliderLoading />}>
        <ServicesSlider />
      </Suspense>
    </section>
  );
};

export default Services;
