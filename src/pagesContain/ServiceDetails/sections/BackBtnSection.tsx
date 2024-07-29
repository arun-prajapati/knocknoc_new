"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackBtnSection = () => {
  const router = useRouter();

  return (
    <div className="bg-primary text-primary-foreground p-2 sm:p-6 rounded-lg mb-3 mt-1 sm:my-4 md:my-7">
      <span
        onClick={() => router.back()}
        className="flex items-center gap-2 text-lg sm:text-xl font-semibold cursor-pointer   w-fit px-2"
      >
        <ArrowLeft /> <span>Back</span>
      </span>
    </div>
  );
};

export default BackBtnSection;
