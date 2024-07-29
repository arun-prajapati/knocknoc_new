import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import apihandler from "@/lib/apihandler";
import Image from "next/image";
const BannerSlider = async ({
  contorllBtn = false,
  banners = [],
}: {
  contorllBtn?: boolean;
  banners: string[];
}) => {
  const banersData = await apihandler({
    path: "/Banner",
    apiConfig: { method: "get" },
  });

  return (
    <Carousel className="banner_slider w-full">
      <CarouselContent>
        {banners.map((e) => (
          <CarouselItem key={e} className="w-full mr-2 aspect-video relative">
            <Image
              src={e}
              alt="banner-image"
              fill={true}
              blurDataURL="/assets/loading_gif.gif"
              placeholder="blur"
              sizes="(min-width: 1200px) 528px, calc(41vw + 44px)"
              className="object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {contorllBtn && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default BannerSlider;
