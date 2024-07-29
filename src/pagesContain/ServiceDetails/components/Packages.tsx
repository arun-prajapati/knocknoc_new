import useSWR from "swr";
import React from "react";

import TypographySmall from "@/components/typography/TypographySmall";

import packages from "@/app/api/swr/packages";
import PackageItem from "./PackageItem";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Packages = ({ services_id }: { services_id: string }) => {
  const fetcher = () => packages({ services_id });

  const { data, error, isLoading } = useSWR("/package", fetcher);

  if (isLoading) return <Skeleton className="w-full h-10" />;

  if (error || !data?.data || (data?.data && data?.data?.length < 1))
    return null;

  return (
    <div className="wallet_amount border-2 rounded-lg p-2 sm:p-3">
      <div className="flex justify-between mb-3">
        <TypographySmall text="Packages" css="opacity-70" />
        <Badge variant="secondary">Optional</Badge>
      </div>
      {data.data.map((e) => {
        return <PackageItem data={e} key={`${e.id}_packageItem`} />;
      })}
    </div>
  );
};

export default Packages;
