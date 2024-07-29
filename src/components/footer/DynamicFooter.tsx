import React from "react";
import MainFooter from "./MainFooter";
import CopyrightLine from "./CopyrightLine";

const DynamicFooter = ({ footerContent }: { footerContent: string }) => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground border-t pb-5 sm:pb-10">
        <div className=" 2xl:container px-2  space-y-3 md:space-y-6">
          {/* --main footer-- */}
          <MainFooter />
          {/* --dynamic content-- */}
          <div
            className="space-y-2 [&_h3]:text-xl [&_p]:text-sm [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: footerContent }}
          />
          {/* --copyright line-- */}
          <CopyrightLine />
        </div>
      </footer>
    </>
  );
};

export default DynamicFooter;
