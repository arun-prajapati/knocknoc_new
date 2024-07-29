import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ServiceDetailsType } from "@/types/types";
import Image from "next/image";

const ServiceItemsSlider = ({
  service_details,
}: {
  service_details: ServiceDetailsType;
}) => {
  return (
    <Carousel className="w-full  overflow-hidden rounded-lg">
      <CarouselContent className="!ml-0">
        {service_details.image?.map((e, index) => {
          return (
            <CarouselItem
              key={`${e}_${index}_img_item`}
              className="itemWrapper relative w-full aspect-[16/12] sm:aspect-video mr-2"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e}`}
                alt={e}
                fill={true}
                loading="lazy"
                blurDataURL="/assets/loading_gif.gif"
                placeholder="blur"
                className="rounded-lg"
              />
            </CarouselItem>
          );
        })}
        {service_details.video && (
          <CarouselItem className="itemWrapper relative w-full aspect-video">
            <video
              src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${service_details.video}`}
              muted
              autoPlay
              controls
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default ServiceItemsSlider;
