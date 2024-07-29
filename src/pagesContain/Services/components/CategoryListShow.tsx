"use client";

// ==  this is a client page for show and filter serviceCategoryList with query parameter and heighlight which is active ==

import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { serviceCategoryTypes } from "@/types/types";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryListShow = ({
  serviceCategoryList,
}: {
  serviceCategoryList: serviceCategoryTypes[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter_serices = searchParams?.get("filter_services");

  return (
    <>
      <CarouselItem className="ms-4 basis-auto">
        <Link
          href={pathname}
          className={cn(
            "block select-none p-1 w-full text-lg font-semibold px-4 py-2 relative text-gray-400 cursor-pointer"
          )}
        >
          All
          {!filter_serices && (
            <span className="bottom_line absolute bottom-0 left-0 w-full h-1 rounded-full bg-primary"></span>
          )}
        </Link>
      </CarouselItem>
      {serviceCategoryList.map((item, index) => (
        <CarouselItem
          key={`${item.id}_${index}_category_service`}
          className="ms-4 basis-auto"
        >
          <Link
            href={pathname + "?" + "filter_services=" + item.id}
            className="block select-none p-1 w-full text-lg font-semibold px-4 py-2 relative text-gray-400 cursor-pointer"
          >
            {item.subcat_name}
            {filter_serices &&
              filter_serices?.toString() === item.id?.toString() && (
                <span className="bottom_line absolute bottom-0 left-0 w-full h-1 rounded-full bg-primary"></span>
              )}
          </Link>
        </CarouselItem>
      ))}
    </>
  );
};

export default CategoryListShow;
