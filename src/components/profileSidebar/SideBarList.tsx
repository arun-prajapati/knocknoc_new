import {
  BadgeHelp,
  Cat,
  Heart,
  HomeIcon,
  Lock,
  PartyPopper,
  SendIcon,
  User,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { Separator } from "../ui/separator";
import TypographyH4 from "../typography/TypographyH4";
import LogoutFun from "./LogoutFun";
import { cookies, headers } from "next/headers";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CurrentUserContext } from "@/context/CurrentUser";

const menuItems = [
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/profile/addresses", icon: HomeIcon, label: "Addresses" },
  { href: "/profile/wallet", icon: Wallet, label: "Wallet" },
  { href: "/profile/favourites", icon: Heart, label: "My Favourites" },
  { href: "/profile/vouchers", icon: PartyPopper, label: "Vouchers" },
  { href: "/profile/referrals", icon: SendIcon, label: "Referrals" },
  { href: "/profile/cat-provider", icon: Cat, label: "Become a cat provider" },
  { href: "/profile/help", icon: BadgeHelp, label: "Get Help" },
  { href: "/profile/about", icon: Cat, label: "About KNOC KNOC" },
  {
    href: "/profile/terms-and-conditions",
    icon: Lock,
    label: "Terms & Conditions / Privacy",
  },
];

const SideBarList = ({ sheetClose }: { sheetClose?: any }) => {
  // --
  const currentUser = useContext(CurrentUserContext);
  // --
  const pathname = usePathname();
  // --
  const SheetClose = sheetClose || "span";

  return (
    <div className="grid items-start text-sm font-medium py-3">
      {/* --auth routes-- */}

      <>
        {currentUser?.user_token && (
          <>
            <TypographyH4 text="My Account" />
            {menuItems.slice(0, 7).map((item) => (
              <Link key={item.href} href={item.href} className="w-full block">
                <SheetClose
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.href && "text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </SheetClose>
              </Link>
            ))}
            <Separator className="my-2" />
          </>
        )}
      </>
      {/* --globle routes-- */}
      <TypographyH4 text="Support " css="mt-2" />
      {menuItems.slice(7).map((item) => (
        <Link key={item.href} href={item.href} className="w-full block">
          <SheetClose
            className={cn(
              "w-full flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === item.href && "text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </SheetClose>
        </Link>
      ))}
      {/* --login btn-- */}
      {currentUser?.user_token && <LogoutFun />}
    </div>
  );
};

export default SideBarList;
