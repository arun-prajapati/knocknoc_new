import CommonFooter from "@/components/footer/CommonFooter";
import Instagram from "@/pagesContain/Instagram";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Instagram",
  alternates: {
    canonical: `/instagram`,
  },
};

const page = () => {
  return (
    <>
      <Instagram />
      <CommonFooter />
    </>
  );
};

export default page;
