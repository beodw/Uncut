import React from "react";

function Orders() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl">My Orders</h1>
      {[1, 2, 3, 4].map(() => (
        <div className="border mt-4 p-4 flex items-center justify-between w-full">
          <img
            src="./img1.jpg"
            alt="TODO"
            className="h-24 w-24 object-cover object-center"
          />
          <div className="flex flex-col">
            <p className="mb-2">Order number</p>
            <p>2324234234</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">Order number</p>
            <p>2324234234</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">Order number</p>
            <p>2324234234</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">Order number</p>
            <p>2324234234</p>
          </div>
          <div className="flex">
            <button className="border border-black p-4 mr-2">
              Repeat Order
            </button>
            <button className="bg-green-600 text-white py-2 px-6">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
