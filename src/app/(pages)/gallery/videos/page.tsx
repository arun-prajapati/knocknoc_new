import Videos from "@/pagesContain/Gallery/Videos";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: `/gallery/videos`,
  },
};

const page = () => {
  return <Videos />;
};

export default page;
