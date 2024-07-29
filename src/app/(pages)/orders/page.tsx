import CommonFooter from "@/components/footer/CommonFooter";
import Orders from "@/pagesContain/Orders";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <Orders searchParams={searchParams} /> <CommonFooter />
    </>
  );
};

export default page;
