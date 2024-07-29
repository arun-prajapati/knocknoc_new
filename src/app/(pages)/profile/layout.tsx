import CommonFooter from "@/components/footer/CommonFooter";
import ProfileSidebar from "@/components/profileSidebar/ProfileSidebar";

import React from "react";

const ProfilePayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="profile_page profile_layout 2xl:container px-2  ">
        {/* --profile pages-- */}

        <div className="md:grid min-h-[80vh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          {/* --sidebar-- */}
          <ProfileSidebar />

          {/* --pages box-- */}
          <main className="flex flex-1 flex-col items-center  gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="w-full max-w-4xl">{children}</div>
          </main>
        </div>
      </main>
      {/* ---- */}
      <CommonFooter />
    </>
  );
};

export default ProfilePayout;
