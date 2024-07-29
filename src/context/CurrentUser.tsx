"use client";
import { auth } from "@/firebase/firebaseConfig";
import { CurrentUserDataType } from "@/types/types";
import { signOut } from "firebase/auth";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { decryptData, encryptData } from "@/lib/cryptoJSFunction";

type CurrentUserContextType = {
  user: CurrentUserDataType | null;
  user_token: string | null;
  setUserData: (key: string, data: CurrentUserDataType | string) => void;
  updateUser: (data: CurrentUserDataType) => void;
  logoutUser: () => void;
};

export const auth_cookies = ["knocknoc_user", "knocknoc_user_details"];

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);

const SECRET_KEY = process.env.SECRET_KEY as string;

const CurrentUser = ({ children }: { children: ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies(auth_cookies);
  const [user_token, setUserToken] = useState<string | null>(null);
  const [user, setUser] = useState<CurrentUserDataType | null>(null);

  useEffect(() => {
    try {
      if (cookies.knocknoc_user) {
        const decryptedToken = decryptData(cookies.knocknoc_user, SECRET_KEY);
        setUserToken(decryptedToken);
      }
      if (cookies.knocknoc_user_details) {
        setUser(cookies.knocknoc_user_details);
      }
    } catch (err) {
      console.error("Error verifying token or user details:", err);
    }
  }, [cookies]);

  const setUserData = (key: string, data: CurrentUserDataType | string) => {
    if (key === auth_cookies[0]) {
      const encryptedToken = encryptData(data as string, SECRET_KEY);
      setCookie(key, encryptedToken, { sameSite: "none", secure: true });
    } else {
      setCookie(key, data);
    }
    signOut(auth);
  };

  const updateUser = (data: CurrentUserDataType) => {
    setCookie(auth_cookies[1], data);
  };

  const logoutUser = () => {
    removeCookie(auth_cookies[0], { sameSite: "none", secure: true });
    removeCookie(auth_cookies[1], { sameSite: "none", secure: true });
    toast.success("Logout successful");
    window.location.href = "/";
  };

  return (
    <CurrentUserContext.Provider
      value={{ user, user_token, setUserData, updateUser, logoutUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUser;
