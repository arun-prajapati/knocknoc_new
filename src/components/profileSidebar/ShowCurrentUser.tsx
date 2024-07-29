"use client";
import Image from "next/image";
import React, { useContext } from "react";
import TypographyH4 from "../typography/TypographyH4";
import { Separator } from "../ui/separator";
import { CurrentUserContext } from "@/context/CurrentUser";
import { Skeleton } from "../ui/skeleton";

const ShowCurrentUser = () => {
  const currentUser = useContext(CurrentUserContext);

  const displayName = currentUser?.user?.firstname;
  const photoURL = currentUser?.user?.image;
  const phoneNumber = currentUser?.user?.phonenumber;
  const email = currentUser?.user?.email;
  console.log(
    `${process.env.NEXT_PUBLIC_API_URL_STORAGE}${photoURL}`,
    "asdfewefwe"
  );
  return (
    <>
      <div className="show_current_user text-center w-full flex flex-col justify-center items-center py-3">
        <div className="profile_img w-20 h-20 rounded-full relative mb-2">
          {!photoURL ? (
            <Skeleton className=" w-20 h-20 rounded-full shadow-md " />
          ) : (
            <Image
              className="  rounded-full shadow-md  "
              src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}${photoURL}`}
              alt={displayName || ""}
              fill
            />
          )}
        </div>
        {!displayName ? (
          <Skeleton className=" w-[50%] h-5 mb-1 rounded-full shadow-md  " />
        ) : (
          <TypographyH4 text={displayName} css="capitalize" />
        )}
        <small className=" max-w-[70%] overflow-hidden">
          {phoneNumber && phoneNumber !== "null"
            ? phoneNumber
            : email && email !== "null"
            ? email
            : ""}
        </small>
      </div>
      <Separator className="my-2" />
    </>
  );
};

export default ShowCurrentUser;
