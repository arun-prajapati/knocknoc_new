"use client";

import { registerFormSchema } from "@/schemas/schemas";
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
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/common/phone-input";
import CommonButton from "@/components/common/CommonButton";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import TypographyH2 from "@/components/typography/TypographyH2";
import SocialLoginUi from "@/components/common/SocialLoginUi";
import phoneNumberChack from "@/app/api/phoneNumberChack";
import { toast } from "sonner";
import register from "@/app/api/register";
import onCaptchVerify from "@/app/api/captchVerify";
import signInWithPhoneNumberAPi from "@/app/api/signInWithPhoneNumberApi";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      gender: "male",
      phonenumber: "",
      conditions: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    try {
      // -call number check api--
      const checknumber = await phoneNumberChack(values.phonenumber);
      if (checknumber.status === 200) {
        toast.error(`${checknumber.message}`);
        return;
      }

      // -- captcha verify --
      const captchaVerify: { success: boolean; message: string } =
        await onCaptchVerify();

      if (!captchaVerify.success) {
        toast.error(`${captchaVerify.message}`);
        return;
      }

      // --sign in with phone number--
      const signInWithPhone = await signInWithPhoneNumberAPi(
        values.phonenumber
      );

      // --redirect to otp page--
      if (signInWithPhone.success) {
        toast.success(`${signInWithPhone.message}`);
        router.push(
          `/otp?info=${JSON.stringify(values)}&verify=${
            signInWithPhone.verificationId
          }&type=register`
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
        <TypographyH2 text="Register" css="font-normal text-center my-4" />
        <div className="form max-w-md mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 my-4"
            >
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your first name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your Last name " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        placeholder="Enter your phone number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex   space-x-1"
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="conditions"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 ">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="conditions"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor="conditions"
                          className="text-sm   leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Accept <strong> terms and conditions</strong>
                        </label>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <CommonButton
                text="Register"
                type="submit"
                css="min-w-[130px] m-auto"
                loading={form.formState.isSubmitting}
              />
            </form>
          </Form>
          {/* --SocialLoginUi-- */}
          <SocialLoginUi pageType="Sign up" />
          {/* -- */}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-3 text-center">
            {`Already have an account?`}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline ps-1 inline-block "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
