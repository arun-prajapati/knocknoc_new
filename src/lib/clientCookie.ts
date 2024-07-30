import { cookies } from "next/headers";
import { decryptData } from "./cryptoJSFunction";

// --
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;
// --
export const getClient_token = () => {
    // --
    const cookieData = cookies().get("knocknoc_user")?.value;
    return decryptData(cookieData || "", SECRET_KEY)
}
