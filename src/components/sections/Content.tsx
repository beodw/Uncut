import React from "react";
import { Orders, ShoppingCart, Products, Checkout } from "../../pages";

const Content = () => {
  return (
    <div className="my-16 grow mx-auto w-full max-w-7xl flex flex-col items-start align-baseline">
      {/* <Products /> */}
      {/* <ShoppingCart /> */}
      {/* <Orders /> */}
      <Checkout />
    </div>
  );
};

export default Content;
