import apihandler from "@/lib/apihandler";
import { GalleryDataTypes } from "@/types/types";
import ShowImages from "../components/ShowImages";
import TypographyH4 from "@/components/typography/TypographyH4";
import NoData from "@/components/common/NoData";

const Images = async () => {
  // --fetch images--
  const fetchImages: { data: GalleryDataTypes[] } = await apihandler({
    path: "/gallery",
    apiConfig: { method: "POST", body: { cat_id: "", type: "image" } },
  });

  if (!fetchImages?.data) {
    return <NoData />;
  }

  return (
    <div className="images_page pb-5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      <ShowImages
        imagesData={fetchImages?.data?.filter((f) => f.type === "image")}
      />
    </div>
  );
};

export default Images;
