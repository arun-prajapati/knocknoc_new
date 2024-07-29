import TypographyP from "@/components/typography/TypographyP";
import TypographySmall from "@/components/typography/TypographySmall";
import {
  ServiceBookDetailsContextENUMS,
  ServiceBookDetailsGetContext,
} from "@/context/ServiceBook";
import { AdditionalServiceType } from "@/types/types";
import { useCallback, useContext, useState } from "react";

const AdditionalServicesItem = ({ data }: { data: AdditionalServiceType }) => {
  // --couter--
  const [couter, setcouter] = useState(0);

  // --store order details context--
  const { data: serviceBookData, ServiceBookDispatch } = useContext(
    ServiceBookDetailsGetContext
  );

  // --increment fun--
  const incrementFun = useCallback(
    (id: string) => {
      const find_obj = serviceBookData.additional_service_id.find(
        (f) => f?.id === id
      );

      if (!ServiceBookDispatch) return;

      // update quantity
      if (find_obj) {
        const change_count = serviceBookData.additional_service_id.map((f) =>
          f?.id === id ? { ...f, quantity: find_obj.quantity + 1 } : f
        );

        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID,
          payload: change_count,
        });

        // -
        setcouter(find_obj.quantity + 1);

        // set new
      } else {
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID,
          payload: [
            ...serviceBookData.additional_service_id,
            { id, price: Number(data.price), quantity: 1 },
          ],
        });
        // -
        setcouter(1);
      }
    },
    [serviceBookData.additional_service_id]
  );

  // --decrement fun--
  const decrementFun = useCallback(
    (id: string) => {
      const find_obj = serviceBookData.additional_service_id.find(
        (f) => f?.id === id
      );

      if (!ServiceBookDispatch) return;

      // update quantity
      if (find_obj && find_obj.quantity > 0) {
        const change_count = serviceBookData.additional_service_id.map((f) =>
          f?.id === id ? { ...f, quantity: find_obj.quantity - 1 } : f
        );
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID,
          payload: change_count,
        });

        // -
        setcouter(find_obj.quantity - 1);

        // remove on zero
      }
      if (find_obj && find_obj.quantity === 0) {
        const removeOnZero = serviceBookData.additional_service_id.filter(
          (f) => f?.id !== id
        );
        ServiceBookDispatch({
          type: ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID,
          payload: removeOnZero,
        });
      }
    },
    [serviceBookData.additional_service_id]
  );

  return (
    <div className="add_on_item border-b py-2">
      <div className="info flex justify-between items-start gap-5 text-primary">
        <TypographyP text={data.additional_ser_name} css="max-w-[400px]" />
        <TypographySmall text={`$${data.price}`} css="pt-1" />
      </div>
      <div className="counter max-w-32 ms-auto">
        <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1 ">
          <button
            data-action="decrement"
            className="bg-white border border-primary w-20 border-r-0   h-full  rounded-l cursor-pointer outline-none text-primary hover:bg-primary hover:text-white"
            onClick={() => decrementFun(data.id.toString())}
          >
            <span className="m-auto text-2xl font-thin  ">−</span>
          </button>
          <input
            type="text"
            className="text-center w-full bg-white border border-primary font-medium text-base"
            value={couter}
            readOnly
          />
          <button
            data-action="increment"
            className="bg-white border border-l-0 border-primary  h-full w-20  rounded-r cursor-pointer text-primary hover:bg-primary hover:text-white"
            onClick={() => incrementFun(data.id.toString())}
          >
            <span className="m-auto text-2xl font-thin ">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServicesItem;
