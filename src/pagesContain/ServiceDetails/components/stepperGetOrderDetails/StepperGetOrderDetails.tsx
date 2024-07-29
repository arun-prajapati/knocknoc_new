"use client";
import React, { createContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SelectDate from "./SelectDate";
import SelectTimeSlot from "./SelectTimeSlot";
import SelectAddress from "./SelectAddress";

// --StepperOrderContext type--
type StepperOrderContextType = {
  currrentStep: number;
  setcurrrentStep: (e: number) => void;
};

export const StepperOrderContext =
  createContext<StepperOrderContextType | null>(null);

const StepperGetOrderDetails = ({
  openModal,
  setOpenModel,
}: {
  openModal: boolean;
  setOpenModel: (value: boolean) => void;
}) => {
  const [currrentStep, setcurrrentStep] = useState(1);
  return (
    <div>
      <Dialog open={openModal} onOpenChange={() => setOpenModel(false)}>
        <DialogContent className="rounded-lg w-[95%] text-left">
          <DialogHeader className="text-left">
            <DialogTitle>Complete Your Order</DialogTitle>
            <DialogDescription>
              <StepperOrderContext.Provider
                value={{ currrentStep, setcurrrentStep }}
              >
                {currrentStep === 1 ? (
                  <SelectDate />
                ) : currrentStep === 2 ? (
                  <SelectTimeSlot />
                ) : currrentStep === 3 ? (
                  <SelectAddress />
                ) : (
                  ""
                )}
              </StepperOrderContext.Provider>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StepperGetOrderDetails;
