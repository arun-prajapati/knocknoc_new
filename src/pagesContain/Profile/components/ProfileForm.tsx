"use client";

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
import { updateUserInfoFormSchema } from "@/schemas/schemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CurrentUserContext } from "@/context/CurrentUser";
import { useContext, useState } from "react";
import base64Api from "@/app/api/base64";
import apihandler from "@/lib/apihandler";
import { toast } from "sonner";
import CommonButton from "@/components/common/CommonButton";

const formSchema = updateUserInfoFormSchema;

function ProfileForm() {
  const currentUser = useContext(CurrentUserContext);

  // --
  const [fileStore, setfileStore] = useState<File | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: currentUser?.user?.firstname || "",
      lastname: currentUser?.user?.lastname || "",
      gender: currentUser?.user?.gender || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // --get image if selected--
    let get_file_url;
    if (fileStore) {
      // -check file type-
      if (
        !["jpeg", "png"].includes(
          fileStore.type.split("/")[fileStore.type.split("/").length - 1]
        )
      ) {
        toast.error("Invalid file");
        return;
      }
      // --
      get_file_url = await base64Api({
        extension:
          fileStore.type.split("/")[fileStore.type.split("/").length - 1],
        file: fileStore,
      });
    }

    // --
    const prepirData = {
      id: "",
      firebase_id: currentUser?.user_token || "",
      fcm_token: currentUser?.user?.fcm_token || "",
      email: currentUser?.user?.email || "",
      phonenumber: currentUser?.user?.phonenumber ?? "",
      image: (get_file_url?.data || currentUser?.user?.image) ?? "",
      // -
      firstname: values.firstname ?? "",
      lastname: values.lastname ?? "",
      gender: values.gender ?? "",
    };

    // --
    const result = await apihandler({
      path: "/updateprofile",
      apiConfig: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prepirData),
      },
    });

    // --
    if (result.status === 200) {
      currentUser?.updateUser(prepirData);
      toast.success(result.message);
    } else {
      toast.success(
        result.message ?? "Something went wrong while updating profile details"
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <>
                  <div className="col-span-full">
                    <div className="mt-2 flex items-center gap-x-3">
                      <Input
                        type="file"
                        {...field}
                        onChange={(f) => {
                          const fileValue = f.target.files && f.target.files[0];
                          if (fileValue) {
                            setfileStore(fileValue);
                            form.setValue("image", f.target.value);
                          }
                        }}
                        accept="image/png, image/jpeg"
                      />
                    </div>
                  </div>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* --gander-- */}
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
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
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
        <CommonButton
          type="submit"
          text="Submit"
          loading={form.formState.isSubmitting}
        />
      </form>
    </Form>
  );
}

export default ProfileForm;
