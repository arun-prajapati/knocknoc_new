import TypographyP from "@/components/typography/TypographyP";
import TypographySmall from "@/components/typography/TypographySmall";
import { AddressesDataTypes } from "@/types/types";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddressList_card = ({
  addressData,
}: {
  addressData: AddressesDataTypes;
}) => {
  return (
    <div className="address_list_card   border border-foreground text-foreground text-base  font-medium rounded-lg p-4 grid grid-cols-[auto,30px]">
      <TypographyP text={`Home`} />
      <Link
        href={`/profile/addresses/address-action?type=edit&address=${JSON.stringify(
          addressData
        )}`}
        className="flex justify-end"
      >
        <Edit className="addressBox size-5" />
      </Link>
      <TypographySmall
        text={`${addressData?.house_no}, ${addressData?.street}, ${addressData?.area_city}, ${addressData?.state}-${addressData?.post_code}`}
        css="opacity-70"
      />
    </div>
  );
};

export default AddressList_card;
