"use client";
import CommonButton from "@/components/common/CommonButton";
import React from "react";

const ShareButton = () => {
  const data = {
    title: "KnocKnoc",
    text: 'Hey! Join KNOC KNOC and get better services. 🤗 Their FREE Account comes with totally awesome and exciting benefits! 🎁🎊 Sign up using my Referral Code "undefined" or Click here https://knocknoc.sg',
    url: "https://knocknoc.sg",
  };
  const shareLink = async () => {
    navigator.share(data);
  };
  return (
    <CommonButton text="Share Link" css="mx-auto mt-6" action={shareLink} />
  );
};

export default ShareButton;
