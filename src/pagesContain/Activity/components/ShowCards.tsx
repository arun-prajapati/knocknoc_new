import CommonButton from "@/components/common/CommonButton";
import TypographyH4 from "@/components/typography/TypographyH4";
import TypographyP from "@/components/typography/TypographyP";
import apihandler from "@/lib/apihandler";
import { ActivityDataType } from "@/types/types";
import Image from "next/image";
import React from "react";
import ShowDetailsModal from "./ShowDetailsModal";
import NoData from "@/components/common/NoData";
import ActivityLoading from "@/loading_layouts/ActivityLoading";

const ShowCards = async ({
  categoryFilter,
  timeFilter,
}: {
  categoryFilter: string | null;
  timeFilter: string | null;
}) => {
  // --fetch activities--
  const get_activity: { data: ActivityDataType[] } = await apihandler({
    path: "/activity",
    apiConfig: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: categoryFilter ?? "promotions",
        sub_type: timeFilter ?? "current",
      }),
    },
  });

  // --show page--
  if (!get_activity || !get_activity.data) {
    return <NoData />;
  }
  if (get_activity && get_activity.data.length < 1) {
    return <NoData text="activity not created" />;
  }

  return (
    <>
      <div className="show_card grid  grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 md:gap-6">
        {get_activity.data.map((e) => (
          <div
            key={`${e.id}_activity_item`}
            className="p-3 rounded-xl"
            style={{ boxShadow: "0 0 5px #d3d3d3" }}
          >
            <div className=" w-full relative  aspect-video rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e.image}`}
                alt={e.name}
                fill
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <TypographyH4 text={`${e.name}`} />
              <TypographyP text={`${e.start_date} - ${e.end_date}`} />

              <ShowDetailsModal
                imgUrl={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${e.image}`}
                categoryFilter={categoryFilter}
                start_date={e.start_date}
                end_date={e.end_date}
                desc={e.description}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowCards;
