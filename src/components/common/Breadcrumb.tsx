import React, { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { routes } from "../../routes";

const Breadcrumb = () => {
  const pathObject = useLocation();
  const crumbs = routes
    // Get all routes that contain the current one.
    .filter(({ path }) => pathObject.pathname.includes(path));
  // Swap out any dynamic routes with their param values.
  // E.g. "/pizza/:pizzaId" will become "/pizza/1"

  // .map(({ path, ...rest }) => ({
  //   path: Object.keys(props.match.params).length
  //     ? Object.keys(props.match.params).reduce(
  //         (path, param) =>
  //           path.replace(`:${param}`, props.match.params[param]),
  //         path
  //       )
  //     : path,
  //   ...rest,
  // }));

  console.log(crumbs);

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
