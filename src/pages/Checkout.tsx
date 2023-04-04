import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductType from "../types/ProductType";
import { appState } from "../redux/store";
import { setCart, setOrders } from "../redux/appSlice";
import OrderType from "../types/OrderType";

const Checkout = () => {
  const navigate = useNavigate();

  const cart: Array<ProductType> = useSelector(
    (state: appState) => state.appSlice.cart
  );

  const orders: Array<OrderType> = useSelector(
    (state: appState) => state.appSlice.orders
  );

  const dispatch = useDispatch();

  const checkout = () => {
    //check some form logic
    dispatch(
      setOrders([
        ...orders,
        {
          image: cart[cart.length - 1].image,
          number: "number",
          pickup_date: "Apr 2, 2022 | 2:00 PM",
          amount: "$45",
          status: "Awaiting Pick-up",
        },
      ])
    );
    dispatch(setCart([]));
    navigate("/account/orders");
  };

  return (
    <div className="bg-white">
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div
                  className="-mb-px flex space-x-8 px-4"
                  aria-orientation="horizontal"
                  role="tablist"
                >
                  <button
                    id="tabs-1-tab-1"
                    className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    Women
                  </button>

                  <button
                    id="tabs-1-tab-2"
                    className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    aria-controls="tabs-1-panel-2"
                    role="tab"
                    type="button"
                  >
                    Men
                  </button>
                </div>
              </div>

              <div
                id="tabs-1-panel-1"
                className="space-y-10 px-4 pb-8 pt-10"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                        className="object-cover object-center"
                      />
                    </div>
                    <a
                      href="#"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>

                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                        className="object-cover object-center"
                      />
                    </div>
                    <a
                      href="#"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Basic Tees
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    id="women-clothing-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Clothing
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-clothing-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Tops
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Dresses
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Pants
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Denim
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sweaters
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        T-Shirts
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Jackets
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Activewear
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Browse All
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    id="women-accessories-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Accessories
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-accessories-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Watches
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Wallets
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Bags
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sunglasses
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Hats
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Belts
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    id="women-brands-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Brands
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-brands-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Full Nelson
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        My Way
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Re-Arranged
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Counterfeit
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Significant Other
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                id="tabs-1-panel-2"
                className="space-y-10 px-4 pb-8 pt-10"
                aria-labelledby="tabs-1-tab-2"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                        alt="Drawstring top with elastic loop closure and textured interior padding."
                        className="object-cover object-center"
                      />
                    </div>
                    <a
                      href="#"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>

                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                        alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                        className="object-cover object-center"
                      />
                    </div>
                    <a
                      href="#"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Artwork Tees
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    id="men-clothing-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Clothing
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-clothing-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Tops
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Pants
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sweaters
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        T-Shirts
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Jackets
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Activewear
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Browse All
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    id="men-accessories-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Accessories
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-accessories-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Watches
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Wallets
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Bags
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sunglasses
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Hats
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Belts
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    id="men-brands-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Brands
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-brands-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Re-Arranged
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Counterfeit
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Full Nelson
                      </a>
                    </li>

                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        My Way
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Company
                </a>
              </div>

              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Stores
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Information
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <div className="w-full grid grid-cols-2 gap-2 justify-between">
              <div className="flex flex-col">
                <h2 className="mb-2">First Name</h2>
                <input
                  id="coupon-code"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2">Last Name</h2>
                <input
                  id="coupon-code"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 justify-between mt-6">
              <div className="flex flex-col">
                <h2 className="mb-2">Email Address</h2>
                <input
                  id="coupon-code"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2">Phone Number</h2>
                <input
                  id="coupon-code"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="w-full justify-between mt-6">
              <div className="flex flex-col">
                <h2 className="mb-2">Address</h2>
                <input
                  placeholder="123 Main Street"
                  id="address-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="w-full justify-between mt-6">
              <div className="flex flex-col">
                <h2 className="mb-2">Address 2 (Optional)</h2>
                <input
                  placeholder="Apartment or Suite"
                  id="apartment-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="w-full justify-between mt-6">
              <div className="flex flex-col">
                <h2 className="mb-2">Town/City</h2>
                <input
                  id="town-city-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-2 justify-between mt-6">
              <div className="flex flex-col">
                <h2 className="mb-2">Country</h2>
                <input
                  id="country-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2">State</h2>
                <input
                  id="state-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2">Zip / Postcode</h2>
                <input
                  id="zip-code-input"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <h1 className="my-8 font-bold text-2xl">Schedule Order Pick-up</h1>

            <hr />

            <div className="w-full justify-between mt-6 grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <h2 className="mb-2">Date</h2>
                <input
                  id="date-input"
                  type="date"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2">Time</h2>
                <input
                  id="time-input"
                  type="time"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <textarea
              className="border w-full my-8 h-32 resize-none outline-green-400 outline-[1px] p-2"
              placeholder=""
            />

            <div className="w-full justify-end items-center flex">
              <button className="bg-green-400 text-white w-1/2 py-2">
                Place Order
              </button>
            </div>
          </section>
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <div className="flex flex-col shadow-xl bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <hr />

              {cart.length !== 0 &&
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="border mt-4 p-4 flex items-start justify-start w-full"
                  >
                    <img
                      src={item.image}
                      alt="TODO"
                      className="h-full w-24 object-cover object-center mr-2"
                    />
                    <div className="flex flex-col">
                      <p className="mb-2">Jelly Donut Holes (4 Pack)</p>
                      <p className="mb-2 text-gray-500 text-sm">
                        Weight: 100mg
                      </p>
                      <p className="mb-2 text-gray-500 text-sm">
                        Category: Bakery
                      </p>
                      <p className="mb-2 text-gray-500 text-sm">Quantity: 1</p>
                    </div>
                  </div>
                ))}

              <hr />
              <div className="border-b-[1px] py-4">
                <div className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    placeholder="Enter Coupon Code"
                    id="coupon-code"
                    type="text"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <button
                  onClick={checkout}
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-green-400 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="w-full flex mt-4 justify-center">
              <span className="text-sm mr-2">Need Hep?</span>
              <button className="text-green-500 text-sm">Chat Now</button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
