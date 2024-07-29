"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { search_suggestion_services_data } from "@/lib/search_suggestion_services_data";

const SearchBox = () => {
  const router = useRouter();
  const [searchValue, setsearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // --form submit--
  const searchSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchValue) {
      toast.warning("Please enter value");
      return;
    }
    router.push(`/search?query=${searchValue}`);
  };

  // --
  useEffect(() => {
    if (searchValue) {
      const filteredSuggestions = search_suggestion_services_data.filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  return (
    <>
      {/* -- */}
      <form className="searchForm relative" onSubmit={searchSubmit}>
        <div className="input_box flex shadow-md p-2 rounded-lg bg-background relative z-20">
          <div className="input flex-grow">
            <Input
              className="w-full border-none focus-visible:ring-offset-0 focus-visible:ring-0 focus:shadow-none  "
              placeholder="Search"
              onChange={(e) => setsearchValue(e.target.value)}
              list="search_suggestions"
              type="text"
            />
            {/* -- */}

            <datalist id="search_suggestions">
              {suggestions.slice(0, 10).map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </div>
          <button className="text-primary p-2">
            <span className="sr-only">search</span>
            <Search />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
