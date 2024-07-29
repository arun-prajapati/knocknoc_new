"use client";
import React, { ReactNode } from "react";
import CurrentUser from "./CurrentUser";
import ServiceBook from "./ServiceBook";
import OrderPlace from "./OrderPlace";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CurrentUser>
        <ServiceBook>
          <OrderPlace>
            <>{children}</>
          </OrderPlace>
        </ServiceBook>
      </CurrentUser>
    </>
  );
};

export default ContextProvider;
