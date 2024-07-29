import TypographyP from "@/components/typography/TypographyP";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import { PackagesDataType } from "@/types/types";
import { useContext } from "react";

const PackageItem = ({ data }: { data: PackagesDataType }) => {
  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = useContext(
    ServiceBookDetailsGetContext
  );

  const selete_package = () => {
    if (serviceBookData.package?.id?.toString() === data.id?.toString()) {
      // --
      ServiceBookDispatch &&
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_PACKAGE,
          payload: null,
        });
    } else {
      ServiceBookDispatch &&
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_PACKAGE,
          payload: {
            id: data?.id?.toString(),
            price: data.price,
            price_total: data.price_total,
          },
        });
    }
  };

  return (
    <div className="package flex gap-2 items-start justify-between my-2">
      <Label
        htmlFor={data.id?.toString()}
        className=" flex items-start gap-3  text-primary"
      >
        <Checkbox
          id={data.id?.toString()}
          className="mt-1"
          checked={
            serviceBookData.package?.id?.toString() === data.id?.toString()
          }
          onCheckedChange={selete_package}
        />
        <TypographyP text={data.description} />
      </Label>
      <TypographyP
        text={`$${data.price}/$${data.price_total}`}
        css=" text-primary font-medium whitespace-nowrap"
      />
    </div>
  );
};

export default PackageItem;
