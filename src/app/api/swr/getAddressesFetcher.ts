import apihandler from "@/lib/apihandler";

export const getAddressesFetcher = async (data: { users_id: string }) => {
  return await apihandler({
    path: "/get_address",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  });
};
