import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";

// --types--
export enum ServiceBookDetailsContextENUMS {
  GET_SERVICE_ID = "GET_SERVICE_ID",
  GET_PACKAGE = "GET_PACKAGE",
  GET_FIREBASE_ID = "GET_FIREBASE_ID",
  GET_ADDRESS_ID = "GET_ADDRESS_ID",
  GET_COUPON = "GET_COUPON",
  GET_ADDITIONAL_SERVICES_ID = "GET_ADDITIONAL_SERVICES_ID",
  GET_DATE = "GET_DATE",
  GET_TIME = "GET_TIME",
  GET_DISCOUNT_AMOUNT = "GET_DISCOUNT_AMOUNT",
  GET_WALLET_AMOUNT = "GET_WALLET_AMOUNT",
  GET_SERVICE_AMOUNT = "GET_SERVICE_AMOUNT",
  GET_TOTAL_AMOUNT = "GET_TOTAL_AMOUNT",
}

type ActionTypes = {
  type: ServiceBookDetailsContextENUMS;
  payload: any;
};

type ADD_ON_TYPE = { id: string; quantity: number; price: number };
type COUPON_TYPE = { id: string; value: string; type: string; code: string };
type PACKAGE_TYPE = { id: string; price: string; price_total: string };
interface ServiceBookDetailsContextTypes {
  data: {
    ser_id: string;
    package: PACKAGE_TYPE | null;
    user_firebase_id: string;
    address_id: string;
    date: string;
    time: string;
    coupon: COUPON_TYPE | null;
    additional_service_id: ADD_ON_TYPE[] | [];
    discount_amount: number;
    wallet_amount: number;
    service_amount: number;
    total_amount: number;
  };
  ServiceBookDispatch?: Dispatch<ActionTypes>;
}

type ApisType = {} | null;

// --initial state--
const initialDetails = {
  data: {
    ser_id: "",
    package: null,
    user_firebase_id: "",
    address_id: "",
    additional_service_id: [],
    coupon: null,
    date: "",
    time: "",
    discount_amount: 0,
    wallet_amount: 0,
    service_amount: 0,
    total_amount: 0,
  },
};

// --service get details context--
export const ServiceBookDetailsGetContext =
  createContext<ServiceBookDetailsContextTypes>(initialDetails);

// --reducer for get service details--

const detailsReducer = (
  state: ServiceBookDetailsContextTypes,
  action: ActionTypes
) => {
  switch (action.type) {
    case ServiceBookDetailsContextENUMS.GET_SERVICE_ID:
      return {
        ...state,
        data: { ...state.data, ser_id: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_PACKAGE:
      return {
        ...state,
        data: { ...state.data, package: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_FIREBASE_ID:
      return {
        ...state,
        data: { ...state.data, user_firebase_id: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_COUPON:
      return {
        ...state,
        data: { ...state.data, coupon: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_ADDRESS_ID:
      return {
        ...state,
        data: { ...state.data, address_id: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_ADDITIONAL_SERVICES_ID:
      return {
        ...state,
        data: { ...state.data, additional_service_id: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_DATE:
      return {
        ...state,
        data: { ...state.data, date: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_TIME:
      return {
        ...state,
        data: { ...state.data, time: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_DISCOUNT_AMOUNT:
      return {
        ...state,
        data: { ...state.data, discount_amount: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_WALLET_AMOUNT:
      return {
        ...state,
        data: { ...state.data, wallet_amount: action.payload },
      };

    case ServiceBookDetailsContextENUMS.GET_SERVICE_AMOUNT:
      return {
        ...state,
        data: { ...state.data, service_amount: action.payload },
      };
    case ServiceBookDetailsContextENUMS.GET_TOTAL_AMOUNT:
      return {
        ...state,
        data: { ...state.data, total_amount: action.payload },
      };
    default:
      return state;
  }
};
const ServiceBook = ({ children }: { children: ReactNode }) => {
  // --state--
  const [serviceBookDetails, ServiceBookDispatch] = useReducer(
    detailsReducer,
    initialDetails
  );

  // --set total price--
  useMemo(() => {
    // get add_on_prices
    const add_on_prices = serviceBookDetails.data.additional_service_id
      .map((e: ADD_ON_TYPE) => e.price * e.quantity)
      ?.reduce((total: number, price: number) => total + price, 0);

    // package pirce
    const package_price =
      Number(serviceBookDetails.data?.package?.price_total) || 0;

    // total
    const total =
      serviceBookDetails.data.service_amount + add_on_prices + package_price;

    // get discount
    const getDiscount =
      total * (Number(serviceBookDetails.data?.coupon?.value ?? 0) / 100);
    // --
    ServiceBookDispatch({
      type: ServiceBookDetailsContextENUMS.GET_TOTAL_AMOUNT,
      payload: total - getDiscount,
    });

    // --
    ServiceBookDispatch({
      type: ServiceBookDetailsContextENUMS.GET_DISCOUNT_AMOUNT,
      payload: getDiscount,
    });
  }, [
    serviceBookDetails.data.additional_service_id,
    serviceBookDetails.data.service_amount,
    serviceBookDetails.data?.coupon?.value,
    serviceBookDetails.data?.package?.price_total,
  ]);

  // --
  return (
    <>
      <ServiceBookDetailsGetContext.Provider
        value={{ ...serviceBookDetails, ServiceBookDispatch }}
      >
        <>{children}</>
      </ServiceBookDetailsGetContext.Provider>
    </>
  );
};

export default ServiceBook;
