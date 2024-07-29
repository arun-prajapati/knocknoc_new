import CommonFooter from "@/components/footer/CommonFooter";
import Gallery from "@/pagesContain/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

const GalleryLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Gallery>{children}</Gallery>
      <CommonFooter />
    </>
  );
};

export default GalleryLayout;
