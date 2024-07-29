import { cn } from "@/lib/utils";
import React from "react";

const TypographyH3 = ({ text, css }: { text: string; css?: string }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight",
        css
      )}
      title={text}
    >
      {text}
    </h3>
  );
};

export default TypographyH3;
