import About from "@/pagesContain/About";
import React from "react";

const page = () => {
  return (
    <main className="profile_page profile_layout 2xl:container px-2  ">
      <div className="w-full mx-auto max-w-4xl pt-10">
        <About />;
      </div>
    </main>
  );
};

export default page;
