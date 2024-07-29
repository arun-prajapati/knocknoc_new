import { cn } from "@/lib/utils";
import React from "react";

const TypographyH4 = ({ text, css }: { text: string; css?: string }) => {
  return (
    <h4
      title={text}
      className={cn(
        "scroll-m-20 text-lg xl:text-xl font-medium tracking-tight",
        css
      )}
    >
      {text}
    </h4>
  );
};

export default TypographyH4;
