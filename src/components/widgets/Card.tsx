import React from "react";
import { setCart } from "../../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { appState } from "../../redux/store";

const Card = ({ item, index }) => {
  let isOutOfStock: boolean = item.status !== "New Arrival";

  const dispatch = useDispatch();

  const cart: Array<Object> = useSelector(
    (state: appState) => state.appSlice.cart
  );

  const addToCart = () => {
    dispatch(setCart([...cart, item]));
  };

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden group-hover:opacity-75">
        <div
          className={`absolute top-4 left-4 text-white ${
            isOutOfStock ? "bg-orange-400" : "bg-green-400"
          } p-2`}
        >
          {item.status}
        </div>
        <img
          src={item.image}
          alt="TODO"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pt-10 text-center border border-gray-200 ">
        <h4 className="text-gray-500">Pre-rolls</h4>
        <h2 className="text-lg text-gray-900 font-bold">{item.title}</h2>
        <h2 className="text-lg text-gray-900 font-bold line-clamp-1">
          ({item.subtitle})
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-base font-medium text-gray-900 py-2">
            ${item.price}
          </p>
          <p className="sr-only">{item.rating} out of 5 stars</p>
          <div className="flex items-center justify-center">
            <svg
              className="text-green-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              className="text-green-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              className="text-green-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              className="text-green-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              className="text-gray-400 h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-base font-medium text-gray-900">13</span>
          </div>
        </div>
        <div className="p-4 ">
          <button
            onClick={addToCart}
            className="bg-black text-white p-2 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
