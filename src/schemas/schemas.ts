import { z } from "zod";

export const loginFormSchema = z.object({
    phonenumber: z.string().nonempty({ message: "This field is required" })
        .min(6, { message: "Phone Number must be 6 or more characters long" })
        .max(50, { message: "Must be 50 or fewer characters long" }),
});

export const registerFormSchema = z.object({
    firstname: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "First Name must be 2 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    lastname: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "Last Name must be 2 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    email: z.string().nonempty({ message: "This field is required" })
        .email({ message: "Invalid email address" })
        .min(2, { message: "Email must be 2 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    phonenumber: z.string().nonempty({ message: "This field is required" })
        .min(6, { message: "Phone Number must be 6 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    gender: z.string(),
    conditions: z.boolean(),
});

export const addressFormSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" })
        .max(100, { message: "Name must be 100 or fewer characters long" }),
    house_no: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "House Number must be 2 or more characters long" })
        .max(50, { message: "House Number must be 50 or fewer characters long" })
        .regex(/^[a-zA-Z0-9\s]*$/, { message: "House Number can only contain letters, numbers, and spaces" })
        .refine((value) => value.trim() !== "", { message: "House Number can't be empty!" }),
    street: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "Street must be 2 or more characters long" })
        .max(50, { message: "Street must be 50 or fewer characters long" })
        .regex(/^[a-zA-Z\s]*$/, { message: "Street can only contain letters and spaces" })
        .refine((value) => value.trim() !== "", { message: "Street can't be empty!" }),
    post_code: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "Post Code must be 2 or more characters long" })
        .max(10, { message: "Post Code must be 10 or fewer characters long" })
        .regex(/^[a-zA-Z0-9\s]*$/, { message: "Post Code can only contain letters, numbers, and spaces" })
        .refine((value) => value.trim() !== "", { message: "Post Code can't be empty!" }),
    area_city: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "Area City must be 2 or more characters long" })
        .max(50, { message: "Area City must be 50 or fewer characters long" })
        .regex(/^[a-zA-Z\s]*$/, { message: "Area City can only contain letters and spaces" })
        .refine((value) => value.trim() !== "", { message: "Area City can't be empty!" }),
    state: z.string().nonempty({ message: "State is required" })
        .max(50, { message: "State must be 50 or fewer characters long" })
        .regex(/^[a-zA-Z\s]*$/, { message: "State can only contain letters and spaces" }),
});

export const updateUserInfoFormSchema = z.object({
    firstname: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "First Name must be 2 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    lastname: z.string().nonempty({ message: "This field is required" })
        .min(2, { message: "Last Name must be 2 or more characters long" })
        .max(50).refine((value) => value.trim() !== "", { message: "Can't be empty!" }),
    gender: z.string(),
    image: z.string(),
});
