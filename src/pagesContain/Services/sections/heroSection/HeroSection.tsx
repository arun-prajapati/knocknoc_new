import DangerouslySetInnerHTML from "@/components/typography/DangerouslySetInnerHTML";
import TypographyH1 from "@/components/typography/TypographyH1";
import { categoryTypes } from "@/types/types";
import Image from "next/image";
import ShowVideo from "./ShowVideo";

const HeroSection = async ({
  current_category,
}: {
  current_category: categoryTypes;
}) => {
  return (
    <section className="hero_section_services bg-primary text-primary-foreground p-2 sm:p-5 md:p-10 grid md:grid-cols-2  items-center gap-3 md:gap-5 rounded-lg my-5">
      <div className="infoBox my-5 px-5 lg:px-10 relative  h-[80%]">
        <Image
          src="/assets/paw_big_image.webp"
          alt="paw_image"
          width={40}
          height={40}
          className="absolute -left-0 sm:-left-2 lg:left-2 -top-2 sm:-top-6 w-10 sm:w-12 md:w-16"
        />

        <TypographyH1
          text={current_category?.cat_name ?? ""}
          css="font-medium mb-3"
        />
        <div className="desc min-h-24">
          <DangerouslySetInnerHTML text={current_category?.description} />
        </div>
      </div>
      {current_category?.banner_video && (
        <div className="videoBox hidden md:block">
          <ShowVideo videoLink={current_category?.banner_video} />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
