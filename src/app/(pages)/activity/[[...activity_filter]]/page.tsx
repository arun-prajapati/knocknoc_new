import CommonFooter from "@/components/footer/CommonFooter";
import Activity from "@/pagesContain/Activity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
  alternates: {
    canonical: `/activity`,
  },
};

const page = ({ params }: { params: { activity_filter: string[] } }) => {
  return (
    <>
      <Activity params={params} /> <CommonFooter />
    </>
  );
};

export default page;
