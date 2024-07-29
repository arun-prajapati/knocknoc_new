import React, { useId } from "react";
import { Label } from "../ui/label";
import TypographyP from "../typography/TypographyP";
import { Checkbox } from "../ui/checkbox";
import TypographySmall from "../typography/TypographySmall";

const AddressCard = ({
  add_name,
  full_address,
  value,
  checked,
  checkChangeFun,
}: {
  add_name: string;
  full_address: string;
  value: string;
  checked?: boolean;
  checkChangeFun?: (e: string) => void;
}) => {
  const u_id = useId();
  return (
    <Label
      htmlFor={`addressBox_${u_id}`}
      className="bg-primary/20 hover:bg-primary/30 cursor-pointer border border-primary text-foreground text-base  font-medium rounded-lg p-4 grid grid-cols-[auto,30px]"
    >
      <TypographyP text={add_name} />
      <div className="flex justify-end">
        <Checkbox
          id={`addressBox_${u_id}`}
          value={value || ""}
          checked={checked ?? false}
          onCheckedChange={() => checkChangeFun && checkChangeFun(value)}
        />
      </div>
      <TypographySmall text={full_address} css="opacity-70" />
    </Label>
  );
};

export default AddressCard;
