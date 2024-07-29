"use server"
import apihandler from "@/lib/apihandler";
import { revalidatePath } from "next/cache";


export const updateAddress_action = async (data: any) => {
    const result = await apihandler({
        path: "/update_address",
        apiConfig: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        },
    });
    // --
    revalidatePath("addresses")
    // --
    return result

};

export const addAddress_action = async (data: any) => {
    const result = await apihandler({
        path: "/user_address",
        apiConfig: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        },
    });
    // --
    revalidatePath("addresses")
    // --
    return result

};

export const deleteAddress_action = async (data: any) => {
    const result = await apihandler({
        path: "/delete_address",
        apiConfig: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        },
    });
    // --
    revalidatePath("addresses")
    // --
    return result

};