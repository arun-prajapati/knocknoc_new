import React from "react";
import ImageSection from "./sections/ImageSection";
import DetailsSection from "./sections/DetailsSection";
import AddressSection from "./sections/AddressSection";
import AddOnSection from "./sections/AddOnSection";
import BillingSection from "./sections/BillingSection";
import ReviewSection from "./sections/ReviewSection";
import BackBtnSection from "../ServiceDetails/sections/BackBtnSection";
import apihandler from "@/lib/apihandler";
import { OrderDataType } from "@/types/types";
import { getClient_token } from "@/lib/clientCookie";

const OrderDetails = async ({
  params,
  searchParams,
}: {
  params: { order: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // --order id--
  const order_id = params.order;

  // --
  const currentPage = searchParams["page"] || 1;
  // --
  const get_order_api_Res: { data: OrderDataType[] } = await apihandler({
    path: "/get_order",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page_no: currentPage?.toString(),
        user_firebase_id: getClient_token() || "",
      }),
    },
  });

  if (!get_order_api_Res.data) {
    return "error";
  }

  if (get_order_api_Res.data && get_order_api_Res.data.length < 1) {
    return "data no avaialbel";
  }

  const order_data = get_order_api_Res.data.find(
    (e) => e.id?.toString() === order_id?.toString()
  );

  if (!order_data) {
    return "data no avaialbel";
  }

  return (
    <main className="order_details_page 2xl:container px-2 py-2 mb-7 min-h-svh">
      <BackBtnSection />
      <div className="page_sections grid sm:grid-cols-2 gap-2 md:gap-4 xl:gap-6">
        <div className="image_section">
          <ImageSection order_data={order_data} />
        </div>
        <div className="details_section  border-b py-3 sm:border-b-0 sm:row-span-5">
          <DetailsSection order_data={order_data} />
        </div>
        <div className="address_section">
          <AddressSection order_data={order_data} />
        </div>
        <div className="add_on_section">
          <AddOnSection order_data={order_data} />
        </div>
        <div className="add_bill_section">
          <BillingSection order_data={order_data} />
        </div>

        <div className="review_section">
          <ReviewSection order_data={order_data} />
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
