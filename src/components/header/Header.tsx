import Image from "next/image";
import Link from "next/link";
import ProfileBox from "./ProfileBox";
import Navbar from "./Navbar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground w-full ">
      <div className="headerWrapper h-16 md:h-20 gap-2 flex items-center px-2 2xl:container">
        {/* --logo-- */}
        <Link href="/" className="min-w-20 aspect-[16/9] relative  block">
          <Image
            src="/assets/knoc_knoc_logo.webp"
            alt="knocknoc"
            sizes="80px"
            decoding="async"
            fill
            priority={true}
          />
        </Link>
        {/* --navbar-- */}
        <div className="flex-grow md:grid justify-center hidden">
          <Navbar />
        </div>
        {/* --manu btn box-- */}
        <div className="grid md:hidden flex-grow  justify-end ">
          <Sheet>
            <SheetTrigger className="border w-10 h-10 rounded-full grid place-content-center ">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <Navbar sheetClose={SheetClose} />
            </SheetContent>
          </Sheet>
        </div>
        {/* --profile box-- */}
        <div>
          <ProfileBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
