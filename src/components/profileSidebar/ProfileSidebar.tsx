"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBarList from "./SideBarList";
import ShowCurrentUser from "./ShowCurrentUser";
import { useContext } from "react";
import { CurrentUserContext } from "@/context/CurrentUser";

const ProfileSidebar = () => {
  // --
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar_container h-full">
      {/* --side bar for big screens-- */}
      <div className="hidden h-full border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 px-2 lg:px-4">
            {currentUser?.user_token && <ShowCurrentUser />}
            <SideBarList />
          </div>
        </div>
      </div>
      {/* --side bat for small screens-- */}
      <div className="flex h-14 md:hidden items-center gap-4  px-4   lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <ShowCurrentUser />

            <SideBarList sheetClose={SheetClose} />
            <div className="mt-auto"></div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProfileSidebar;
