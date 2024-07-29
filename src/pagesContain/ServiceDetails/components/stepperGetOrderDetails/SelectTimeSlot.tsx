import CommonButton from "@/components/common/CommonButton";
import TypographyP from "@/components/typography/TypographyP";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { StepperOrderContext } from "./StepperGetOrderDetails";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import { cn } from "@/lib/utils";

const timeSlots = [
  { id: 1, slot: "09:00AM To 12:00PM" },
  { id: 2, slot: "10:00AM To 01:00PM" },
  { id: 3, slot: "11:00AM To 01:00PM" },
  { id: 4, slot: "02:00PM To 05:00PM" },
  { id: 5, slot: "03:00PM To 06:00PM" },
  { id: 6, slot: "05:00PM To 08:00PM" },
  { id: 7, slot: "05:00PM To 09:00PM" },
  { id: 8, slot: "06:00PM To 09:00PM" },
  { id: 9, slot: "06:00PM To 10:00PM" },
];

const SelectTimeSlot = () => {
  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = React.useContext(
    ServiceBookDetailsGetContext
  );

  // --context--
  const stepperContext = React.useContext(StepperOrderContext);

  // --set date--
  const setTimeFun = (timeVal: string) => {
    // --
    ServiceBookDispatch &&
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_TIME,
        payload: timeVal,
      });
  };

  return (
    <>
      <div className="select_time_slot border p-2 sm:p-4 rounded-lg my-2 sm:my-4">
        <TypographyP text="Select Time Slot" />
        <Separator className="my-2" />
        <div className="timeSlots max-h-[60vh] overflow-auto grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid gap-2">
          {timeSlots.map((e) => (
            <div
              key={`${e.id}_timeSlot`}
              className={cn(
                "bg-primary/20 hover:bg-primary/50 cursor-pointer border border-primary text-foreground text-base  font-medium rounded-lg p-4",
                serviceBookData.time === e.slot && "bg-primary shadow-lg"
              )}
              onClick={() => setTimeFun(e.slot)}
            >
              <TypographyP text={e.slot} />
            </div>
          ))}
        </div>
      </div>
      <div className="btns flex gap-2 justify-end">
        <CommonButton
          text="Back"
          variant="outline"
          action={() => stepperContext?.setcurrrentStep(1)}
        />
        <CommonButton
          text="Done"
          action={() => stepperContext?.setcurrrentStep(3)}
        />
      </div>
    </>
  );
};

export default SelectTimeSlot;
