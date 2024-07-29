"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ css, sheetClose }: { css?: string; sheetClose?: any }) => {
  const pathname = usePathname();
  const SheetClose = sheetClose || "span";

  return (
    <nav
      className={cn(
        "flex gap-4 text-lg flex-col md:flex-row items-center text-foreground/90 md:text-primary-foreground/90",
        css
      )}
    >
      <Link href="/" className="relative">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname === "/" && "font-semibold"
            )}
          >
            Home
          </span>
        </SheetClose>
        {pathname === "/" && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>

      <Link href="/gallery/images" className="relative">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname?.includes("/gallery") && "font-semibold"
            )}
          >
            Gallery
          </span>
        </SheetClose>
        {pathname?.includes("/gallery") && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>
      <Link className="relative" href="/instagram">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname?.includes("/instagram") && "font-semibold"
            )}
          >
            Instagram
          </span>
        </SheetClose>
        {pathname?.includes("/instagram") && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>
      <Link className="relative" href="/activity">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname?.includes("/activity") && "font-semibold"
            )}
          >
            Activity
          </span>
        </SheetClose>
        {pathname?.includes("/activity") && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>
      <Link className="relative" href="/profile">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname?.includes("/profile") && "font-semibold"
            )}
          >
            Profile
          </span>
        </SheetClose>
        {pathname?.includes("/profile") && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>
      <Link className="relative" href="/orders">
        <SheetClose>
          <span
            className={cn(
              "name  text-foreground md:text-primary-foreground ",
              pathname?.includes("/orders") && "font-semibold"
            )}
          >
            My Orders
          </span>
        </SheetClose>
        {pathname?.includes("/orders") && (
          <span className="pawIcon absolute top-full left-1/2 -translate-x-1/2">
            <Image
              src="/assets/paw_image_small.png"
              alt="paw_image"
              width={16}
              height={16}
            />
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
