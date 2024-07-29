"use client";
import AddressCard from "@/components/cards/AddressCard";
import CommonButton from "@/components/common/CommonButton";
import TypographyP from "@/components/typography/TypographyP";
import { Separator } from "@/components/ui/separator";
import React, { useContext } from "react";
import { StepperOrderContext } from "./StepperGetOrderDetails";
import useSWR from "swr";

import { CurrentUserContext } from "@/context/CurrentUser";
import { getAddressesFetcher } from "@/app/api/swr/getAddressesFetcher";
import { AddressesDataTypes } from "@/types/types";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import { OrderPlaceContext } from "@/context/OrderPlace";
import { Loader } from "lucide-react";
import NoData from "@/components/common/NoData";
import Link from "next/link";

// --address fetcher--

const SelectAddress = () => {
  // --context--
  const stepperContext = useContext(StepperOrderContext);
  const orderContext = useContext(OrderPlaceContext);

  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = useContext(
    ServiceBookDetailsGetContext
  );

  // --current user--
  const current_user = useContext(CurrentUserContext);

  // --fetch addresses--
  const { data, error, isLoading } = useSWR("/get_address", () =>
    getAddressesFetcher({ users_id: current_user?.user_token ?? "" })
  );
  console.log(data, error, isLoading, "data, error, isLoading ");
  // --set address--
  const setAddress = (val: string) => {
    // --
    ServiceBookDispatch &&
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_ADDRESS_ID,
        payload: val,
      });
  };

  // --

  if (isLoading) {
    return (
      <div className="py-20  flex justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return <NoData text="Data not found" />;
  }

  return (
    <>
      <div className="select_time_slot border  p-2 sm:p-4 rounded-lg my-2 sm:my-4">
        <TypographyP text="Select Address" />
        <Separator className="my-2" />
        <div className="address max-h-80 overflow-auto grid gap-2">
          {!data?.data || data?.data?.length < 1 ? (
            <div className="  grid justify-center">
              <NoData text="Address not created" css="max-w-[250px]" />
              <Link href="/profile/addresses" className="flex  justify-center">
                <CommonButton text="Create New" />
              </Link>
            </div>
          ) : (
            <>
              {data?.data &&
                data.data.map((e: AddressesDataTypes) => {
                  return (
                    <React.Fragment key={`${e.id}_address_item_select`}>
                      <AddressCard
                        add_name="House"
                        full_address={`${e?.house_no}, ${e?.street}, ${e?.area_city}, ${e?.state}-${e?.post_code}`}
                        value={e.id.toString()}
                        checked={
                          serviceBookData.address_id === e.id.toString() ||
                          false
                        }
                        checkChangeFun={setAddress}
                      />
                    </React.Fragment>
                  );
                })}
            </>
          )}
        </div>
      </div>
      <div className="btns flex gap-2 justify-end">
        <CommonButton
          text="Back"
          variant="outline"
          action={() => stepperContext?.setcurrrentStep(2)}
        />
        <CommonButton
          text="Checkout"
          loading={orderContext?.payment_loading}
          disabled={!data?.data || data?.data?.length < 1}
          action={() => orderContext?.place_order_fun()}
        />
      </div>
    </>
  );
};

export default SelectAddress;
