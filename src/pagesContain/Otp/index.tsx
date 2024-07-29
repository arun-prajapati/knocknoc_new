"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { useRouter, useSearchParams } from "next/navigation";
import verifyCode from "@/app/api/verifyCode";
import register from "@/app/api/register";
import generateFcmToken from "@/lib/generateFcmToken";
import loginApi from "@/app/api/login";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import CommonButton from "@/components/common/CommonButton";
import { auth_cookies, CurrentUserContext } from "@/context/CurrentUser";
import { useContext } from "react";

const Otp = () => {
  const router = useRouter();
  // --
  const searchParams = useSearchParams();
  const info = JSON.parse(searchParams.get("info") ?? "");
  const verifyToken: string = searchParams.get("verify") ?? "";
  const type: string = searchParams.get("type") ?? "";

  // --
  const currentUser = useContext(CurrentUserContext);
  // --
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // --
  const onSubmit = async (data: any) => {
    try {
      // --verify otp--
      const verifyOtpCodeFun: { success: boolean; message: string; data: any } =
        await verifyCode(data.otp, verifyToken);

      if (!verifyOtpCodeFun.success) {
        toast.error(verifyOtpCodeFun.message);
        return;
      }

      //   --user firebase data--
      const { uid } = verifyOtpCodeFun.data.user;

      //   -- generateFcmToken --
      const generateFcmTokenGet = await generateFcmToken();
      // --register user--
      if (type === "register") {
        const regsiterUser = await register({
          ...info,
          phonenumber: `+${info.phonenumber.trim()}`,
          firebase_id: uid,
          fcm_token: generateFcmTokenGet.token,
        });
        if (regsiterUser.success) {
          // --set user in cookie--
          currentUser?.setUserData(auth_cookies[0], uid);
          // -filter user data--
          const user_data = regsiterUser.data.data;
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
          toast.success(regsiterUser.message);
          // --redirect to home page--
          window.location.href = "/";
        } else {
          toast.error(regsiterUser.message);
          // --if get any error so clear auth login details--
          signOut(auth);
          // --And redirect to login page--
          router.push("/register");
        }
      }
      // --login user--
      if (type === "login") {
        const loginUser = await loginApi({
          phonenumber: `+${info.phonenumber.trim()}`,
          firebase_id: uid,
          fcm_token: generateFcmTokenGet.token,
        });
        if (loginUser.success) {
          // --set user in cookie--
          currentUser?.setUserData(auth_cookies[0], uid);
          currentUser?.setUserData(auth_cookies[1], loginUser.data.data);
          // --
          toast.success(loginUser.message);
          // --redirect to home page--
          window.location.href = "/";
        } else {
          toast.error(loginUser.message);
          // --if get any error so clear auth login details--
          signOut(auth);
          // --And redirect to login page--
          router.push("/login");
        }
      }
    } catch (error: any) {
      toast.error(
        error.message
          ? `${error.message} Please try again`
          : "Something went wrong please try again"
      );
    }
  };

  return (
    <main className="otp_page h-screen bg-primary p-2 sm:p-4 border-t flex justify-center items-center overflow-auto">
      <div className="max-w-md h-fit flex items-center justify-center outline outline-1 outline-muted rounded-md p-4 bg-background">
        <div className="w-full space-y-2">
          <div className="space-y-1 text-center">
            <TypographyH2 text="OTP verification" />
            <TypographyP
              text={`Enter the 6-digit code sent to your  Phone Number`}
            />
            <TypographyP text={`+${info.phonenumber}`} />
          </div>
          <Form {...form}>
            <form
              className="grid gap-2 space-y-4 pt-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormControl>
                    <>
                      <FormItem>
                        <InputOTP
                          maxLength={6}
                          {...field}
                          containerClassName="justify-center"
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} className="size-12" />
                            <InputOTPSlot index={1} className="size-12" />
                            <InputOTPSlot index={2} className="size-12" />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} className="size-12" />
                            <InputOTPSlot index={4} className="size-12" />
                            <InputOTPSlot index={5} className="size-12" />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormItem>
                      <FormMessage />
                    </>
                  </FormControl>
                )}
              />
              <CommonButton
                text="Submit"
                type="submit"
                loading={form.formState.isSubmitting}
              />
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Otp;
