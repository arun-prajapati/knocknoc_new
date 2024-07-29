"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import TypographyP from "@/components/typography/TypographyP";
import { Separator } from "@/components/ui/separator";
import { StepperOrderContext } from "./StepperGetOrderDetails";
import CommonButton from "@/components/common/CommonButton";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import { SelectSingleEventHandler } from "react-day-picker";

const SelectDate = () => {
  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = React.useContext(
    ServiceBookDetailsGetContext
  );

  // --context--
  const stepperContext = React.useContext(StepperOrderContext);

  // -
  const [date, setDate] = React.useState<Date | undefined>(
    (serviceBookData?.date && new Date(serviceBookData?.date)) || new Date()
  );

  // --set date--
  const setDateFun: SelectSingleEventHandler = (dateVal) => {
    // -
    setDate(dateVal);
    // --
    ServiceBookDispatch &&
      ServiceBookDispatch({
        type: ServiceBookDetailsContextENUMS.GET_DATE,
        payload: dateVal,
      });
  };

  // Calculate the date one day before today
  const oneDayBeforeToday = new Date();
  oneDayBeforeToday.setDate(oneDayBeforeToday.getDate() - 1);

  return (
    <>
      <div className="select_date border p-2 sm:p-4 rounded-lg my-2 sm:my-4">
        <TypographyP text="Select Date" />
        <Separator className="my-2" />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDateFun}
          className="rounded-md   h-full w-full flex "
          disabled={(date) => date < oneDayBeforeToday}
          classNames={{
            months:
              "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "text-center",
            row: "w-full mt-2   [&:has([aria-selected].day-outside)]:bg-transparent  [&:has([aria-selected])]:bg-transparent",
            cell: "bg-transparent text-center",
          }}
        />
      </div>
      <div className="btns flex gap-2 justify-end">
        <CommonButton
          text="Done"
          action={() => stepperContext?.setcurrrentStep(2)}
        />
      </div>
    </>
  );
};

export default SelectDate;
