import apihandler from "@/lib/apihandler";
import BackBtnSection from "./sections/BackBtnSection";
import PricingSection from "./sections/PricingSection";
import ReviewSection from "./sections/ReviewSection";
import ServiceDetailsSection from "./sections/ServiceDetailsSection";
import { ServiceDetailsType } from "@/types/types";
import TypographyH4 from "@/components/typography/TypographyH4";
import ReviewsLoading from "@/loading_layouts/serviceDetails/ReviewsLoading";
import { Suspense } from "react";

const ServiceDetails = async ({
  services_details,
}: {
  services_details: string;
}) => {
  // --get service data--
  const serviceDetailsData: { data: ServiceDetailsType[] } = await apihandler({
    path: "/get_service_by_id",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ser_slug: services_details }),
    },
  });

  // --
  if (!serviceDetailsData || !serviceDetailsData?.data) {
    return <TypographyH4 text="Data Not Found!" css="py-5 text-center" />;
  }

  return (
    <main className="secvice_details_page 2xl:container p-2 mb-7 min-h-svh ">
      <BackBtnSection />
      <div className="page_content grid grid-cols-1 sm:grid-cols-[50%,auto] md:grid-cols-[60%,auto] gap-x-[3vw] ">
        <ServiceDetailsSection service_details={serviceDetailsData.data[0]} />
        <PricingSection
          service_details={serviceDetailsData.data[0]}
          services_id={serviceDetailsData.data[0]?.id?.toString() ?? ""}
        />

        <Suspense fallback={<ReviewsLoading />}>
          <ReviewSection
            services_id={serviceDetailsData.data[0]?.id?.toString() ?? ""}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default ServiceDetails;
