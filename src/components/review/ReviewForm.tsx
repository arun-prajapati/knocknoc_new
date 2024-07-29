"use client";
import React, { useContext } from "react";
import CommonButton from "../common/CommonButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import apihandler from "@/lib/apihandler";
import { CurrentUserContext } from "@/context/CurrentUser";

// {
//     "user_firebase_id": "E2Hq6LfBQGbvVPf9J6k6l0SchM03",
//     "order_id": "4789",
//     "sr_id": "150",
//     "rating": 3,
//     "review": "test by dev"
// }

const formSchema = z.object({
  rating: z.string().min(1).max(5),
  review: z
    .string()
    .min(10, {
      message: "Review must be at least 10 characters.",
    })
    .max(160, {
      message: "Review must not be longer than 30 characters.",
    }),
});

const ReviewForm = ({
  order_id,
  ser_id,
}: {
  order_id: string;
  ser_id: string;
}) => {
  // --
  const currentUser = useContext(CurrentUserContext);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: "1",
      review: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await apihandler({
        path: "/rating",
        apiConfig: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            sr_id: ser_id,
            user_firebase_id: currentUser?.user_token,
            order_id,
          }),
        },
      });
      toast.success(result.message);
      form.reset();
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  }

  return (
    <Form {...form}>
      <form
        className="review_form space-y-2 py-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* -- */}
        <div className="ratings">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    {/* --items-- */}
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="1" hidden />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg
                          className={cn(
                            "size-6 text-gray-500",
                            field.value >= "1" && "text-yellow-500"
                          )}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="2" hidden />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg
                          className={cn(
                            "size-6 text-gray-500",
                            field.value >= "2" && "text-yellow-500"
                          )}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="3" hidden />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg
                          className={cn(
                            "size-6 text-gray-500",
                            field.value >= "3" && "text-yellow-500"
                          )}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="4" hidden />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg
                          className={cn(
                            "size-6 text-gray-500",
                            field.value >= "4" && "text-yellow-500"
                          )}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="5" hidden />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        <svg
                          className={cn(
                            "size-6 text-gray-500",
                            field.value >= "5" && "text-yellow-500"
                          )}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </FormLabel>
                    </FormItem>
                    {/* --//items-- */}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* -- */}
        <div className="message_box">
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Enter your review..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <CommonButton
          text="Submit"
          type="submit"
          loading={form.formState.isSubmitting}
        />
      </form>
    </Form>
  );
};

export default ReviewForm;
