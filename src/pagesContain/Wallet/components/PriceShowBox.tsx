import apihandler from "@/lib/apihandler";
import { getClient_token } from "@/lib/clientCookie";
import React from "react";

const PriceShowBox = async () => {
  // --fetch wallet--
  const get_wallet: { amount: number } = await apihandler({
    path: "/wallet_amount_get",
    apiConfig: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_firebase_id: getClient_token() ?? "" }),
    },
  });

  // --show page--
  if (!get_wallet) {
    return "data not found";
  }
  return (
    <div className="price text-center text-xl sm:text-3xl md:text-4xl font-semibold my-5 text-primary">
      Balance ${get_wallet?.amount}
    </div>
  );
};

export default PriceShowBox;
