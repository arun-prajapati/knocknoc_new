import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import React from "react";
import AddressActionForm from "./components/AddressActionForm";

import DeleteAddress from "./components/DeleteAddress";

const AddressAction = () => {
  return (
    <div className="address_action_page">
      <ProfilePagesWrapper heading="Address" headerContent={<DeleteAddress />}>
        <div className="addresses_action_form">
          <AddressActionForm />
        </div>
      </ProfilePagesWrapper>
    </div>
  );
};

export default AddressAction;
