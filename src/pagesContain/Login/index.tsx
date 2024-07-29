"use client";

import { loginFormSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/common/phone-input";
import CommonButton from "@/components/common/CommonButton";
import { CircleX } from "lucide-react";
import Link from "next/link";
import TypographyH2 from "@/components/typography/TypographyH2";
import SocialLoginUi from "@/components/common/SocialLoginUi";
import phoneNumberChack from "@/app/api/phoneNumberChack";
import { toast } from "sonner";
import onCaptchVerify from "@/app/api/captchVerify";
import signInWithPhoneNumberAPi from "@/app/api/signInWithPhoneNumberApi";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phonenumber: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      // -call number check api--
      const checknumber = await phoneNumberChack(values.phonenumber);

      if (checknumber.status !== 200) {
        toast.error(`${checknumber.message}`);
        return;
      }

      // // -- captcha verify --
      const captchaVerify: { success: boolean; message: string } =
        await onCaptchVerify();

      if (!captchaVerify.success) {
        toast.error(`${captchaVerify.message}`);
        return;
      }

      // // --sign in with phone number--
      const signInWithPhone = await signInWithPhoneNumberAPi(
        values.phonenumber
      );

      // // --redirect to otp page--
      if (signInWithPhone.success) {
        toast.success(`${signInWithPhone.message}`);
        router.push(
          `/otp?info=${JSON.stringify(values)}&verify=${
            signInWithPhone.verificationId
          }&type=login`
        );
      }
    } catch (error: any) {
      toast.error(error.message ?? `Somtething went wrong`);
    }
  }

  return (
    <main className="login_page h-screen bg-primary p-2 sm:p-4 border-t flex justify-center items-center overflow-auto">
      <div className="form_container bg-background text-foreground p-3 w-[calc(100%-10px)] m-auto max-w-xl rounded-lg">
        <Link className="back_btn grid justify-end mb-2" href={"/"}>
          <CircleX />
        </Link>
        <TypographyH2 text="Login" css="font-normal text-center my-4" />
        <div className="form max-w-md mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 my-4"
            >
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        placeholder="Enter your phone number "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CommonButton
                text="Login"
                type="submit"
                css="min-w-[130px] m-auto"
                loading={form.formState.isSubmitting}
              />
            </form>
          </Form>

          {/* --SocialLoginUi-- */}
          <SocialLoginUi pageType="Sign in" />
          {/* -- */}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-3 text-center">
            {`Don't have an account yet?`}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline ps-1 inline-block "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
