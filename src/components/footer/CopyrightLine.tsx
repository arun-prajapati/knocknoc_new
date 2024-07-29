import React from "react";
import TypographyP from "../typography/TypographyP";
import { Separator } from "../ui/separator";

const CopyrightLine = () => {
  return (
    <>
      <Separator />
      <TypographyP
        text="© 2024 Your Knoc Knoc. All rights reserved."
        css="text-center"
      />
    </>
  );
};

export default CopyrightLine;
