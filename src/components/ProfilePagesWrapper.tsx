import React, { ReactNode } from "react";
import { Separator } from "./ui/separator";

const ProfilePagesWrapper = ({
  heading,
  headerContent,
  children,
}: {
  heading: string;
  headerContent?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <>
      {/* -heading- */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">{heading}</h1>
        {headerContent}
      </div>
      <Separator className="my-3 md:my-6" />
      {/* -page content- */}
      <div className="page_content">{children}</div>
    </>
  );
};

export default ProfilePagesWrapper;
