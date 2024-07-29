import useSWR from "swr";
import AdditionalServicesItem from "./AdditionalServicesItem";
import TypographySmall from "@/components/typography/TypographySmall";
import additional_service_get from "@/app/api/swr/additional_service_get";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const AdditionalServices = ({ services_id }: { services_id: string }) => {
  // --
  const fetcher = () => additional_service_get({ services_id });
  // --
  const { data, error, isLoading } = useSWR("/additional_service_get", fetcher);

  // --
  if (isLoading) return <Skeleton className="w-full h-10" />;

  if (error || !data?.data || (data?.data && data?.data?.length < 1))
    return null;

  return (
    <div className="wallet_amount border-2 rounded-lg p-2 sm:p-3">
      <div className="flex justify-between mb-3">
        <TypographySmall text="Add on" css="opacity-70" />
        <Badge variant="secondary">Optional</Badge>
      </div>

      {data.data.map((e) => {
        return <AdditionalServicesItem data={e} key={`${e.id}_add_on_item`} />;
      })}
    </div>
  );
};

export default AdditionalServices;
