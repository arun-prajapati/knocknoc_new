"use client";

import TypographyH3 from "@/components/typography/TypographyH3";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import SearchedServices from "./sections/SearchedServices";
import { IconLeft } from "react-day-picker";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search_query = searchParams.get("query");
  const [searchValue, setsearchValue] = useState<string>(search_query || "");

  // --form submit--
  const searchSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchValue) {
      toast.warning("Please enter value");
      return;
    }
    router.push(`/search?query=${searchValue}`);
  };

  return (
    <main className="search_page 2xl:container px-2 py-4 sm:py-6 lg:py-8 space-y-4 min-h-svh">
      {/* --search-- */}
      <div className="serach_bar sm:flex justify-between items-center space-y-3 sm:space-y-0">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="outline">
              <IconLeft />
            </Button>
          </Link>
          <TypographyH3 text="Search" />
        </div>
        <div className="search_box w-full sm:max-w-md">
          <form className="searchForm relative" onSubmit={searchSubmit}>
            <div className="input_box flex shadow-[0_0_5px_lightgray] py-1 px-2 rounded-lg bg-background relative z-20">
              <div className="input flex-grow">
                <Input
                  className="w-full border-none focus-visible:ring-offset-0 focus-visible:ring-0 focus:shadow-none  "
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setsearchValue(e.target.value)}
                />
              </div>
              <button className="text-primary p-2">
                <span className="sr-only">search</span>
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* --products-- */}
      <div className="search_products">
        <SearchedServices search_query={search_query || ""} />
      </div>
    </main>
  );
};

export default Search;
