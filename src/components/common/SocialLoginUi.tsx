"use client";
import signInWithPopupFun from "@/app/api/signInWithPopup";
import socialLogin from "@/app/api/socialLogin";
import { auth_cookies, CurrentUserContext } from "@/context/CurrentUser";
import generateFcmToken from "@/lib/generateFcmToken";
import { UserCredential } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const SocialLoginUi = ({ pageType }: { pageType: string }) => {
  // --
  const currentUser = useContext(CurrentUserContext);
  // --
  const [loading, setloading] = useState(false);

  // --login with google--
  const loginWithGoogle = async () => {
    setloading(true);
    try {
      const googleLogin: UserCredential | Error = await signInWithPopupFun();

      if ((googleLogin as UserCredential).user) {
        const user = (googleLogin as UserCredential).user;

        //   -- generateFcmToken --
        const generateFcmTokenGet = await generateFcmToken();

        // --
        const combineData = {
          firebase_id: user.uid,
          fcm_token: generateFcmTokenGet.token,
          firstname: user.displayName || "null",
          lastname: "null",
          email: user.email || "null",
          social_type: "google",
        };
        // --call api--
        const socialLoginApi = await socialLogin(combineData);

        if (socialLoginApi.success) {
          // --set user in cookie--
          currentUser?.setUserData(auth_cookies[0], user.uid);
          // -
          const user_data = socialLoginApi.data.data;
          const filterUserData = {
            firstname: user_data.firstname || "",
            lastname: user_data.lastname || "",
            email: user_data.email || "",
            phonenumber: user_data.phonenumber || "",
            gender: user_data.gender || "",
            image: user_data.image || "",
          };

          currentUser?.setUserData(auth_cookies[1], filterUserData);
          // --
          toast.success(socialLoginApi.message);
          // --redirect to home page--
          setTimeout(() => {
            window.location.href = "/";
          }, 200);
        } else {
          toast.error(socialLoginApi.message);
        }
      } else {
        toast.error("Error during Google login");
      }
    } catch (error: any) {
      toast.error(error?.message ?? "Something went wrong during Google login");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
        <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
          OR
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 disabled:opacity-70"
          onClick={loginWithGoogle}
          disabled={loading}
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          {pageType} with Google
        </button>
      </div>
    </>
  );
};

export default SocialLoginUi;
