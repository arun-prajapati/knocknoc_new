"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function CommonPaginations({
  url,
  currentPage = 1,
  pages = 1,
}: {
  url: string;
  currentPage: number;
  pages: number;
}) {
  const router = useRouter();

  // --
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={cn(
            "cursor-pointer",
            currentPage === 1 && "pointer-events-none"
          )}
        >
          <PaginationPrevious
            onClick={() => router.push(`${url}?page=${currentPage - 1}`)}
          />
        </PaginationItem>

        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from(Array(Number(pages))).map((_, i) => {
          const item = i + 1;
          if (
            currentPage + 1 === item ||
            item === currentPage ||
            currentPage - 1 === item
          ) {
            return (
              <PaginationItem
                key={`${item}_pagei`}
                className={cn("cursor-pointer")}
              >
                <PaginationLink
                  onClick={() => router.push(`${url}?page=${item}`)}
                  isActive={currentPage === item}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}

        {currentPage < pages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem
          className={cn(
            "cursor-pointer",
            currentPage === pages && "pointer-events-none "
          )}
        >
          <PaginationNext
            onClick={() => router.push(`${url}?page=${currentPage + 1}`)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
