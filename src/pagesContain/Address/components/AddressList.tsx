import React from "react";
import AddressList_card from "./AddressList_card";
import apihandler from "@/lib/apihandler";
import { AddressesDataTypes } from "@/types/types";
import NoData from "@/components/common/NoData";
import { getClient_token } from "@/lib/clientCookie";

const AddressList = async () => {
  // --fetch addresses--
  const get_address: { data: AddressesDataTypes[] } = await apihandler({
    path: "/get_address",
    apiConfig: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ users_id: getClient_token() || "" }),
      next: { tags: ["addresses"] },
    },
  });

  // --show page--
  if (!get_address || !get_address.data) {
    return <NoData />;
  }
  if (get_address && get_address.data.length < 1) {
    return <NoData text="Addresses not created" />;
  }

  return (
    <div className="address_list space-y-3">
      {get_address.data.map((e) => (
        <React.Fragment key={`${e.id}_address_item`}>
          <AddressList_card addressData={e} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default AddressList;
