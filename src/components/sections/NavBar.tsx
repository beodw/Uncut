import React from "react";
import { useSelector } from "react-redux";
import { appState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const menuItems = [
    { name: "Account", icon: "user.png" },
    { name: "Orders", icon: "layout-list.png" },
    { name: "Log out", icon: "log-out.png" },
  ];
  const cart: Array<Object> = useSelector(
    (state: appState) => state.appSlice.cart
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigate = useNavigate();

  return (
    <div className="bg-blue-500">
      {/* <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
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
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <form>
                <div className="inline-block">
                  <label className="sr-only">Currency</label>
                  <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="mobile-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      <option>CAD</option>

                      <option>USD</option>

                      <option>AUD</option>

                      <option>EUR</option>

                      <option>GBP</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-black">
        {/* <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src=""
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        ></div> */}

        <header className="relative z-10">
          <nav aria-label="Top">
            <div className="bg-black-500">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-8">
                <form>
                  <div className="flex">
                    <div className="h-6 w-6">
                      <img src="/images/icons/truck.png" />
                    </div>
                    <div className="text-white ml-4 uppercase">
                      Free in-store pickup
                    </div>
                  </div>
                </form>

                <div className="flex justify-between space-x-24">
                  <div className="flex text-white space-x-12">
                    <a href="">Pick Up</a>
                    <a href="">FAQ</a>
                    <a
                      href="tel:(617) 775-7865"
                      className="flex items-center space-x-2"
                    >
                      <div className="h-4 w-4">
                        <img src="/images/icons/phone.png" />
                      </div>
                      <span> (617) 775-7865</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="h-6 w-6">
                      <img src="/images/icons/facebook.png" />
                    </button>
                    <button className="h-6 w-6">
                      <img src="/images/icons/twitter.png" />
                    </button>
                    <button className="h-6 w-6">
                      <img src="/images/icons/instagram.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg">
              <div className="mx-auto max-w-7xl px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="/">
                        <img
                          className="h-8 w-auto"
                          src="/images/icons/logo.png"
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="flex flex-1 items-center lg:hidden">
                      <button type="button" className="-ml-2 p-2 text-white">
                        <span className="sr-only">Open menu</span>
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                    <a href="#" className="lg:hidden">
                      <img
                        src="/images/icons/logo.png"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>

                    <div className="flex flex-1 items-center justify-end">
                      <a
                        href="#"
                        className="hidden text-sm font-medium text-white lg:block"
                      >
                        Search
                      </a>

                      <div className="flex items-center lg:ml-8">
                        <a href="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
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
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                          </svg>
                        </a>

                        <button
                          onClick={() => navigate("/product/shopping-cart")}
                          className="relative w-6 h-6"
                        >
                          {cart.length !== 0 && (
                            <div className="rounded-full bg-red-500 text-white flex justify-center items-center w-2 h-2 absolute p-2 text-xs -top-2 -right-2">
                              {cart.length}
                            </div>
                          )}

                          <img src="/images/icons/shopping-bag.png" />
                        </button>

                        <div className="ml-4 flow-root lg:ml-8">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <Menu.Button className="rounded-full border border-black flex items-center justify-center w-6 h-6 p-[4px]">
                              <img src="/images/icons/user.png" />
                            </Menu.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  {menuItems.map((menuItem, idx) => (
                                    <Menu.Item key={idx}>
                                      {({ active }) => (
                                        <div
                                          onClick={() =>
                                            menuItem.name === "Orders" &&
                                            navigate("/account/orders")
                                          }
                                          className={`flex w-full justify-start items-center hover:text-green-500 hover:fill-green-500 ${classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                          )}`}
                                        >
                                          <div className="w-4 h-4 mr-2">
                                            <img
                                              src={`/images/icons/${menuItem.icon}`}
                                            />
                                          </div>

                                          <a href="#">{menuItem.name}</a>
                                        </div>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>

                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
