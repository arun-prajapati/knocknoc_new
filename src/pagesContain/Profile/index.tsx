import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import React from "react";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    <div className="vouchers_action_page">
      <ProfilePagesWrapper heading="Profile">
        <div className="Content">
          <ProfileForm />
        </div>
      </ProfilePagesWrapper>
    </div>
  );
};

export default Profile;
