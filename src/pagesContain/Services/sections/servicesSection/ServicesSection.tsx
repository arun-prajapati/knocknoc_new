import React from "react";
import { serviceTypes } from "@/types/types";
import NoData from "@/components/common/NoData";
import ServicesList from "../../components/ServicesList";
import apihandler from "@/lib/apihandler";
import { getClient_token } from "@/lib/clientCookie";

const ServicesSection = async ({
  current_category,
}: {
  current_category: number;
}) => {
  // -
  const serviceData: { data: serviceTypes[] } = await apihandler({
    path: "/subcategory2",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cat_id: current_category,
        subcat_id: "",
        user_firebase_id: getClient_token() || "",
      }),
      next: { tags: ["services"] },
    },
  });

  // --
  if (!serviceData.data) {
    return <NoData css="max-w-sm" />;
  }

  return <ServicesList servicesData={serviceData.data} />;
};

export default ServicesSection;
