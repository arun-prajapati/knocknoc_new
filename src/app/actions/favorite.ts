"use server"
import apihandler from "@/lib/apihandler";
import { revalidateTag } from "next/cache";

export const favorite_api_action = async (data: {
    ser_id: string,
    status: number,
    user_firebase_id: string,
}): Promise<{ message: string, status: number }> => {
    const categoryData =
        await apihandler({
            path: "/favorite",
            apiConfig: {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            },
        });

    // --revalidate categorys--
    revalidateTag('services')

    // return
    return categoryData





}