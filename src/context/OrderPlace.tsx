import { createContext, ReactNode, useContext, useState } from "react";
import { ServiceBookDetailsGetContext } from "./ServiceBook";
import apihandler from "@/lib/apihandler";
import { toast } from "sonner";
import jwt from "jwt-simple";
import { formatDate } from "@/lib/formatDate";

// --
type OrderPlaceContextType = {
  payment_loading: boolean;
  place_order_fun: () => void;
} | null;

// --context--
export const OrderPlaceContext = createContext<OrderPlaceContextType>(null);

const OrderPlace = ({ children }: { children: ReactNode }) => {
  // --order data--
  const order_data = useContext(ServiceBookDetailsGetContext);

  // --
  const [payment_loading, setpayment_loading] = useState(false);

  // --place order fun--
  const place_order_fun = async () => {
    const order_data_get = order_data.data;

    // --validations--
    if (!order_data_get.ser_id) {
      return toast.error("Service Id is required");
    }

    if (!order_data_get.user_firebase_id) {
      return toast.error("User Firebase Id is required");
    }
    if (!order_data_get.address_id) {
      return toast.error("Address Id is required");
    }
    if (!order_data_get.date) {
      return toast.error("Date is required");
    }
    if (!order_data_get.time) {
      return toast.error("Time is required");
    }
    if (!order_data_get.total_amount) {
      return toast.error("Total Amount is required");
    }

    // --
    setpayment_loading(true);
    try {
      // --order data--
      const order_data_combine = {
        ser_id: order_data_get.ser_id,
        package_id: order_data_get.package,
        user_firebase_id: order_data_get.user_firebase_id,
        address_id: order_data_get.address_id,
        date: formatDate(new Date(order_data_get.date)),
        time: order_data_get.time,
        coupon_id: order_data_get.coupon,
        additional_service_id: order_data_get.additional_service_id.map(
          (e) => ({
            id: e.id,
            quantity: e.quantity,
          })
        ),
        wallet_amount: "0",
        total_amount: order_data_get.total_amount?.toString() || "",
      };

      // --order api--
      const orderResult = await apihandler({
        path: "/order",
        apiConfig: {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order_data_combine),
        },
      });

      if (orderResult?.status === 200) {
        generatePaymentToken({
          invoice_no: orderResult?.invoice?.invoice_no,
          priceValue: order_data_get.total_amount?.toString(),
          serviceName: "knoc knoc",
        });
      } else {
        toast.error(orderResult?.message || "Something went wrong");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setpayment_loading(false);
    }
  };

  // --genrate payment token api--
  type PriceData = {
    invoice_no: string;
    serviceName: string;
    priceValue: string;
  };

  const generatePaymentToken = async (priceData: PriceData): Promise<void> => {
    setpayment_loading(true);
    try {
      const payload = {
        merchantID: "702702000002346",
        invoiceNo: `${priceData.invoice_no}`,
        description: `${priceData.serviceName.replace(/[^a-zA-Z0-9 ]/g, "")}`,
        amount: `${priceData.priceValue}`,
        currencyCode: "SGD",
      };

      const secretKey =
        "083819787D08A2D3AC086136238A108F7D797CDCD2FE9D4DABBED0079159B758";
      const jwtToken = await jwt.encode(payload, secretKey);

      // Call payment API
      const response = await fetch(
        "https://pgw.2c2p.com/payment/4.1/paymentToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload: jwtToken }),
        }
      );

      const payment_action = await response.json();

      // Get payment URL
      const payment_url = jwt.decode(
        payment_action.payload,
        secretKey
      ).webPaymentUrl;

      // Redirect for payment
      window.open(payment_url, "_self");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setpayment_loading(false);
    }
  };

  // --
  return (
    <>
      <OrderPlaceContext.Provider value={{ payment_loading, place_order_fun }}>
        <>{children}</>
      </OrderPlaceContext.Provider>
    </>
  );
};

export default OrderPlace;
