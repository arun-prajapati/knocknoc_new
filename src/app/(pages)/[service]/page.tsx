import apihandler from "@/lib/apihandler";
import Services from "@/pagesContain/Services";
import { categoryTypes } from "@/types/types";

// --
// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  // --get category data--
  const categoryData: { data: categoryTypes[] } = await apihandler({
    path: "/category",
    apiConfig: { method: "get" },
  });

  // --get current cateogry--
  const current_category = categoryData?.data?.find(
    (f) => f.cat_slug === params.service
  );

  return {
    title: current_category?.meta_title || "",
    description: current_category?.meta_description || "",
    keywords: [current_category?.meta_keyword],
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${
            current_category?.image || "/assets/error_img.webp"
          }`,
        },
      ],
    },
  };
}

// --
const Page = ({ params }: { params: { service: string } }) => {
  return (
    <>
      <Services service_slug={params.service} />
    </>
  );
};

export default Page;
