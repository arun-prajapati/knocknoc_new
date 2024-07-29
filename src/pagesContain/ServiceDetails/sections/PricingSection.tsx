"use client";
import React, { useContext, useEffect, useState } from "react";
import WalletAmount from "../components/WalletAmount";
import ApplyCoupon from "../components/ApplyCoupon";
import PriceDetails from "../components/PriceDetails";
import CommonButton from "@/components/common/CommonButton";
import StepperGetOrderDetails from "../components/stepperGetOrderDetails/StepperGetOrderDetails";
import AdditionalServices from "../components/AdditionalServices";
import Packages from "../components/Packages";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { ServiceDetailsType } from "@/types/types";
import { CurrentUserContext } from "@/context/CurrentUser";
import Link from "next/link";

const PricingSection = ({
  services_id,
  service_details,
}: {
  services_id: string;
  service_details: ServiceDetailsType;
}) => {
  const [openModal, setOpenModel] = useState(false);
  const [loginConfirmAlert, setLoginConfirmAlert] = useState(false);

  // --current user context--
  const currentUser = useContext(CurrentUserContext);

  // --store order details context--
  const { ServiceBookDispatch } = useContext(ServiceBookDetailsGetContext);

  // --check user login--
  const check_user_login = () => {
    if (!currentUser?.user_token) {
      setLoginConfirmAlert(true);
      return;
    }
    setOpenModel(true);
  };

  // --set book details--
  useEffect(() => {
    if (service_details && ServiceBookDispatch) {
      // set user id
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_FIREBASE_ID,
        payload: currentUser?.user_token || "",
      });
      // set ser id
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_SERVICE_ID,
        payload: service_details.id?.toString(),
      });
      // set price
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_SERVICE_AMOUNT,
        payload: service_details.price,
      });

      // --remove preseleted values
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID,
        payload: [],
      });
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_PACKAGE,
        payload: null,
      });
    }
  }, []);

  // --
  return (
    <section className="pricing_section w-full sm:row-span-3 ">
      <div className="pricing_box sm:shadow-[0_0_18px_0_#0000001c] p-2 sm:p-4 rounded-lg space-y-3 sm:space-y-4">
        <AdditionalServices services_id={services_id} />
        <Packages services_id={services_id} />
        <WalletAmount />
        <ApplyCoupon />
        <PriceDetails service_details={service_details} />
        <CommonButton text="Book Now" css="m-auto" action={check_user_login} />
      </div>

      {/* --StepperGetOrderDetails modal-- */}
      <StepperGetOrderDetails
        openModal={openModal}
        setOpenModel={setOpenModel}
      />

      <AlertDialog open={loginConfirmAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Please Log In First</AlertDialogTitle>
            <AlertDialogDescription>
              To Book Your Service, please log in to your account. This ensures
              a secure and personalized shopping experience.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setLoginConfirmAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <Link href="/login">
              <AlertDialogAction>Sign in</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default PricingSection;
