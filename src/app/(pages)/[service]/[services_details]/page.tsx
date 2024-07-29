import CommonFooter from "@/components/footer/CommonFooter";
import apihandler from "@/lib/apihandler";
import ServiceDetails from "@/pagesContain/ServiceDetails";
import { ServiceDetailsType } from "@/types/types";

// --genrate dynamic metadata--
export async function generateMetadata({
  params,
}: {
  params: { services_details: string };
}) {
  // --get service data--
  const serviceDetailsData: { data: ServiceDetailsType[] } = await apihandler({
    path: "/get_service_by_id",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ser_slug: params.services_details }),
    },
  });

  // --
  const data = serviceDetailsData?.data && serviceDetailsData?.data[0];
  // --
  return {
    title: data?.meta_title || "",
    description: data?.meta_description || "",
    keywords: [data?.meta_keyword],
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${
            data?.image || "/assets/error_img.webp"
          }`,
        },
      ],
    },
  };
}

// --
const page = ({ params }: { params: { services_details: string } }) => {
  return (
    <>
      {" "}
      <ServiceDetails services_details={params.services_details} />{" "}
      <CommonFooter />
    </>
  );
};

export default page;
