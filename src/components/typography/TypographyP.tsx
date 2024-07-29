import { cn } from "@/lib/utils";
import React from "react";

const TypographyP = ({ text, css }: { text: string; css?: string }) => {
  return <p className={cn("leading-7 text-sm sm:text-base", css)}>{text}</p>;
};

export default TypographyP;
