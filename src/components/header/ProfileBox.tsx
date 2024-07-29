"use client";

import { CurrentUserContext } from "@/context/CurrentUser";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const ProfileBox = () => {
  const currentUser = useContext(CurrentUserContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <>
      {currentUser?.user_token ? (
        <Link
          href="/profile"
          className="userInfo size-10 rounded-full grid place-content-center bg-secondary text-secondary-foreground border capitalize"
        >
          {currentUser?.user?.firstname[0] || "-"}
        </Link>
      ) : (
        <Link href="/login">Sign In</Link>
      )}
    </>
  );
};

export default ProfileBox;
