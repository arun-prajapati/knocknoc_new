"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import CommonButton from "@/components/common/CommonButton";
import { useRouter, useSearchParams } from "next/navigation";
import { AddressesDataTypes } from "@/types/types";
import { toast } from "sonner";
import apihandler from "@/lib/apihandler";
import { deleteAddress_action } from "@/app/actions/address_actions";

const DeleteAddress = () => {
  const router = useRouter();

  // --
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const addressDataStringffy = searchParams.get("address");
  const address_edit: AddressesDataTypes | null = addressDataStringffy
    ? JSON.parse(addressDataStringffy)
    : null;

  // --delete fun--
  const deleteAddress = async () => {
    try {
      const result = await deleteAddress_action({
        id: address_edit?.id?.toString() ?? "",
      });

      toast.success(result.message);
      // --
      router.push("/profile/addresses");
    } catch (error: any) {
      toast.error(error.message ?? "Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>
          {type === "edit" && address_edit?.id && (
            <CommonButton text="Delete this address" variant="destructive" />
          )}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm!</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure want to Delete this address?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteAddress}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAddress;
