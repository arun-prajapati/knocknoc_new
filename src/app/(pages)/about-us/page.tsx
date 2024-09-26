import About from "@/pagesContain/About";
import SecondAboutPage from "@/pagesContain/About/SecondAboutPage";
import React from "react";

const page = () => {
  return (
    <main className="profile_page profile_layout 2xl:container px-2  ">
      <div className="w-full mx-auto max-w-4xl pt-10">
        <SecondAboutPage />
      </div>
    </main>
  );
};

export default page;
