"use client";

// ==  this is a client page for show and filter services ==

import ServiceShowCard from "@/components/cards/ServiceShowCard";
import NoData from "@/components/common/NoData";
import { CurrentUserContext } from "@/context/CurrentUser";
import { serviceTypes } from "@/types/types";
import { useParams, useSearchParams } from "next/navigation";
import React, { useContext, useMemo, useState } from "react";

const ServicesList = ({ servicesData }: { servicesData: serviceTypes[] }) => {
  // --
  const currentUser = useContext(CurrentUserContext);

  // --
  const query = useSearchParams();
  const filter_services = query?.get("filter_services");

  // --
  const params = useParams<{ service: string }>();
  const service = params?.service;

  // --useState--
  const [servicesDataFiltred, setservicesDataFiltred] = useState(servicesData);

  useMemo(async () => {
    const filterdData = servicesData.filter((f) =>
      filter_services
        ? f.subcat_id?.toString() === filter_services?.toString()
        : f
    );
    setservicesDataFiltred(filterdData);
  }, [filter_services, servicesData]);

  // ---
  if (servicesDataFiltred.length < 1) {
    return <NoData text="Services not available" css="max-w-sm" />;
  }

  return (
    <>
      <div className="services_show sm:px-4 grid  grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 md:gap-5 lg:gap-7 ">
        {servicesDataFiltred.map((item) => {
          return (
            <React.Fragment key={`${item.id}_service`}>
              <ServiceShowCard
                service_id={item.id}
                image={
                  item?.banner_image
                    ? `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${item?.banner_image}`
                    : "/assets/no_image.webp"
                }
                rating={item.rating ?? "4.5"}
                name={item.ser_name}
                linkStatus={item.favorite_status === 1 ? true : false}
                price={item.price}
                link={`/${service}/${item.ser_slug}`}
                show_fav_button={currentUser?.user ? true : false}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ServicesList;
