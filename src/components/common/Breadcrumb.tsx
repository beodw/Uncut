import React from "react";

const Breadcrumb = () => {
  return (
    <div className="mx-auto w-full max-w-7xl mt-6">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="">Home</span>
              </a>
            </div>
          </li>

          <li>|</li>

          <li>
            <div className="flex items-center">
              <a
                href="#"
                className=" text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Products
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
