import apihandler from "@/lib/apihandler";

// --
type ApiPeramterTypes = { user_firebase_id: string }

// --
const wallet_amount_get = async (data: ApiPeramterTypes): Promise<{ amount: number, message: string, status: number }> => {

    const walletAmbout: { amount: number, message: string, status: number } =
        await apihandler({
            path: "/wallet_amount_get",
            apiConfig: {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_firebase_id: data.user_firebase_id }),
            },

        });
    // -
    return walletAmbout

}
export default wallet_amount_get
