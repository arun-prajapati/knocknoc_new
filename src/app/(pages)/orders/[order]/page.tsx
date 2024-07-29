import CommonFooter from "@/components/footer/CommonFooter";
import OrderDetails from "@/pagesContain/orderDetails/OrderDetails";
import React from "react";

const page = ({
  params,
  searchParams,
}: {
  params: { order: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <OrderDetails params={params} searchParams={searchParams} />{" "}
      <CommonFooter />
    </>
  );
};

export default page;
