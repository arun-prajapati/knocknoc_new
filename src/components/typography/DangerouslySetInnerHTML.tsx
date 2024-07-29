"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

const DangerouslySetInnerHTML = ({
  text,
  className,
}: {
  text: string | TrustedHTML;
  className?: string;
}) => {
  const [getText, setGetText] = useState<string | TrustedHTML>("");

  useEffect(() => {
    text && setGetText(text);
  }, [text]);
  return (
    <p
      className={cn("leading-7   text-base md:text-lg xl:text-xl", className)}
      dangerouslySetInnerHTML={{
        __html: getText,
      }}
    />
  );
};

export default DangerouslySetInnerHTML;
