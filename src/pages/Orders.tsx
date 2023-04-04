import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderType from "../types/OrderType";
import { appState } from "../redux/store";

const Orders = () => {
  const navigate = useNavigate();

  const orders: Array<OrderType> = useSelector(
    (state: appState) => state.appSlice.orders
  );

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl">My Orders</h1>
      {orders.length !== 0 ? (
        orders.map((item, idx) => (
          <div
            key={idx}
            className="border mt-4 p-4 flex items-center justify-between w-full"
          >
            <img
              src={item.image}
              alt="TODO"
              className="h-24 w-24 object-cover object-center"
            />
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Order number</p>
              <p>{item.number}</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Pick-up Date</p>
              <p>{item.pickup_date}</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Status</p>
              <p>{item.status}</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Order Amount</p>
              <p>{item.amount}</p>
            </div>
            <div className="flex">
              <button
                onClick={() => navigate("/checkout")}
                className="border border-black p-4 mr-2"
              >
                Repeat Order
              </button>
              <button className="bg-green-400 text-white py-2 px-6">
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="flex justify-center text-2xl">No Orders</h1>
      )}
    </div>
  );
};

export default Orders;
