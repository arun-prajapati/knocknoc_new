import HeroSection from "./sections/heroSection/HeroSection";
import CategorySection from "./sections/categorySection/CategorySection";
import apihandler from "@/lib/apihandler";
import { categoryTypes } from "@/types/types";
import TypographyH4 from "@/components/typography/TypographyH4";
import ServicesSection from "./sections/servicesSection/ServicesSection";
import ServicesLoading from "@/loading_layouts/services/ServicesLoading";
import { Suspense } from "react";
import SubCategoriesLoading from "@/loading_layouts/services/SubCategoriesLoading";
import DynamicFooter from "@/components/footer/DynamicFooter";
import { notFound } from "next/navigation";
import NoData from "@/components/common/NoData";

const Services = async ({ service_slug }: { service_slug: string }) => {
  // --get category data--
  const categoryData: { data: categoryTypes[] } = await apihandler({
    path: "/category",
    apiConfig: { method: "get" },
  });

  // --
  if (!categoryData || !categoryData?.data) {
    return <NoData />;
  }

  // --get current cateogry--
  const current_category = categoryData.data.find(
    (f) => f.cat_slug === service_slug
  );

  // --
  if (!current_category) {
    return notFound();
  }

  return (
    <>
      <main className="services_page 2xl:container p-2 mb-7 md:mb-16 min-h-svh">
        <HeroSection current_category={current_category} />
        <Suspense
          fallback={
            <div className="my-5 sm:my-10">
              <SubCategoriesLoading />
            </div>
          }
        >
          <CategorySection current_category={current_category?.id} />
        </Suspense>
        <Suspense fallback={<ServicesLoading />}>
          <ServicesSection current_category={current_category?.id} />
        </Suspense>
      </main>
      {/* --dynamic footer-- */}
      <DynamicFooter
        footerContent={current_category?.footer || "<span></span>"}
      />
    </>
  );
};

export default Services;
