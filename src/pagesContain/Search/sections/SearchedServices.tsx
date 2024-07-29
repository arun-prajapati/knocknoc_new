import ServiceShowCard from "@/components/cards/ServiceShowCard";
import NoData from "@/components/common/NoData";
import apihandler from "@/lib/apihandler";
import GalleryPageLoading from "@/loading_layouts/GalleryPageLoading";
import { serviceTypes } from "@/types/types";
import React, { memo } from "react";
import useSWR from "swr";

// --fetch search_query data--
const searchedServiceData = async (search_query: string) =>
  await apihandler({
    path: "/subcategory2",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cat_id: "",
        subcat_id: "",
        search: search_query,
        user_firebase_id: "",
      }),
    },
  });

const SearchedServices = ({ search_query }: { search_query: string }) => {
  const { data, isLoading, error } = useSWR<{ data: serviceTypes[] }>(
    `/subcategory2/${search_query}`,
    () => searchedServiceData(search_query),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );

  if (isLoading) {
    return <GalleryPageLoading />;
  }

  if (error || !data?.data) {
    return <NoData />;
  }

  return (
    <div className="search_services_list grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
      {data?.data &&
        data?.data?.map((e) => (
          <ServiceShowCard
            key={`${e.id}_search_item`}
            image={
              e?.banner_image
                ? `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e?.banner_image}`
                : "/assets/no_image.webp"
            }
            link={`/${e.cat_slug}/${e.ser_slug}`}
            name={e.ser_name}
            price={e.price}
            rating={e.rating || "5.0"}
            service_id={e.id}
            show_fav_button={false}
            linkStatus={e.favorite_status === 1 ? true : false}
          />
        ))}
    </div>
  );
};

const SearchedServicesMemo = memo(SearchedServices);
export default SearchedServicesMemo;
