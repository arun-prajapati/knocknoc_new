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
import { addressFormSchema } from "@/schemas/schemas";
import CommonButton from "@/components/common/CommonButton";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useContext } from "react";
import { CurrentUserContext } from "@/context/CurrentUser";
import { AddressesDataTypes } from "@/types/types";
import apihandler from "@/lib/apihandler";
import {
  addAddress_action,
  updateAddress_action,
} from "@/app/actions/address_actions";
function AddressActionForm() {
  const router = useRouter();
  // --
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const addressDataStringffy = searchParams.get("address");
  const address_edit: AddressesDataTypes | null = addressDataStringffy
    ? JSON.parse(addressDataStringffy)
    : null;
  // --
  const currentUser = useContext(CurrentUserContext);
  // --
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      name: "home",
      house_no: address_edit?.house_no ?? "",
      street: address_edit?.street ?? "",
      post_code: address_edit?.post_code ?? "",
      area_city: address_edit?.house_no ?? "",
      state: address_edit?.state ?? "",
    },
  });
  //   --go back--
  const goBack = () => {
    router.push("/profile/addresses");
  };
  // -- update fun--
  const updateAddressFun = async (data: z.infer<typeof addressFormSchema>) => {
    try {
      const result = await updateAddress_action({
        ...data,
        id: address_edit?.id?.toString() ?? "",
        users_id: currentUser?.user_token ?? "",
      });

      toast.success(result.message);
      // --
      goBack();
    } catch {
      toast.error("Something went wrong while updating address!");
    }
  };

  // -- add fun--
  const addAddressFun = async (data: z.infer<typeof addressFormSchema>) => {
    try {
      const result = await addAddress_action({
        ...data,
        users_id: currentUser?.user_token ?? "",
      });

      toast.success(result.message);
      // --
      goBack();
    } catch {
      toast.error("Something went wrong while adding address!");
    }
  };

  // --submit fun--
  async function onSubmit(data: z.infer<typeof addressFormSchema>) {
    if (type === "edit") {
      await updateAddressFun(data);
    } else {
      await addAddressFun(data);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="house_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>House No</FormLabel>
              <FormControl>
                <Input placeholder="Enter your house number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input placeholder="Enter your street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="post_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Post code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="area_city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area Or City</FormLabel>
              <FormControl>
                <Input placeholder="Enter  your area or city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Enter your state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <CommonButton text="Cancle" variant="secondary" action={goBack} />
          <CommonButton
            type="submit"
            text="Submit"
            loading={form.formState.isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}
export default AddressActionForm;
