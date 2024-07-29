import ServiceCard from "@/components/cards/ServiceCard";
import TypographyH4 from "@/components/typography/TypographyH4";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import apihandler from "@/lib/apihandler";
import { categoryTypes } from "@/types/types";

const ServicesSlider = async () => {
  // --fetch--
  const categoryData: { data: categoryTypes[] } = await apihandler({
    path: "/category",
    apiConfig: { method: "GET" },
  });

  if (!categoryData || !categoryData?.data) {
    return <TypographyH4 text="Data Not Found!" css="py-5 text-center" />;
  }

  console.log(categoryData, "categoryData");

  return (
    <div className="services_slider">
      <Carousel className="w-full">
        <CarouselContent className="p-4 sm:ps-5">
          {categoryData.data.map((e, index) => (
            <CarouselItem
              key={`${e.id}_category_${index}`}
              className=" mr-5 sm:mr-10        sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <ServiceCard
                image={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e.image}`}
                name={e.cat_name}
                link={`/${e.cat_slug}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServicesSlider;
