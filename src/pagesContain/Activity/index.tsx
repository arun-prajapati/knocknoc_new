import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShowCards from "./components/ShowCards";
import Link from "next/link";
import { Suspense } from "react";
import ActivityLoading from "@/loading_layouts/ActivityLoading";
import { twMerge } from "tailwind-merge";

const Activity = ({ params }: { params: { activity_filter: string[] } }) => {
  // --get params--
  const categoryFilter =
    (params.activity_filter && params.activity_filter[0]) || "promotions";
  const timeFilter =
    (params.activity_filter && params.activity_filter[1]) || "past";

  return (
    <>
      <main className="activity_page 2xl:container px-2 min-h-svh">
        {/* -category tabs- */}
        <Tabs value={categoryFilter} className="text-center py-2">
          <TabsList
            className={twMerge(
              " bg-white  no-scrollbar sm:-mt-4 transition-all duration-100 w-full overflow-auto  max-w-[500px] h-14 px-4   relative shadow-[0_0_10px_#d3d3d3] !data-[state=active]:bg-primary ",
              categoryFilter === "promotions"
                ? "justify-start"
                : categoryFilter === "campaigns"
                ? "justify-center"
                : "justify-end"
            )}
          >
            <TabsTrigger
              value="promotions"
              className="text-base sm:text-lg w-full   data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Link
                href={`/activity/promotions/${timeFilter}`}
                className="  block w-full h-full"
              >
                Promotions
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="campaigns"
              className="text-base sm:text-lg w-full  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Link
                href={`/activity/campaigns/${timeFilter}`}
                className="  block w-full h-full"
              >
                Campaigns
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="charity"
              className="text-base sm:text-lg w-full relative  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Link
                href={`/activity/charity/${timeFilter}`}
                className="  block w-full h-full"
              >
                Charity
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* -time tab- */}
        <div className="time_tab_box overflow-x-auto -mt-2">
          <Tabs value={timeFilter}>
            <div className="flex justify-center no-scrollbar">
              <TabsList className="w-full max-w-[300px] sm:h-14 p-5">
                <TabsTrigger value="past" className="w-full">
                  <Link href={`/activity/${categoryFilter}/past`}>PAST</Link>
                </TabsTrigger>
                <TabsTrigger value="current" className="w-full">
                  <Link href={`/activity/${categoryFilter}/current`}>
                    CURRENT
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="w-full">
                  <Link href={`/activity/${categoryFilter}/upcoming`}>
                    UPCOMING
                  </Link>
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
        {/* --show cards-- */}
        <div className="contnet_container py-10">
          <Suspense fallback={<ActivityLoading />}>
            <ShowCards
              categoryFilter={categoryFilter}
              timeFilter={timeFilter}
            />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Activity;
