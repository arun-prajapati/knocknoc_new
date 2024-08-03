import Images from "@/pagesContain/Gallery/Images";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: `/gallery/images`,
  },
};

const page = () => {
  return <Images />;
};

export default page;
