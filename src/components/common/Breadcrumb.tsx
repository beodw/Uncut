import React, { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { routes } from "../../routes";

const Breadcrumb = () => {
  const pathObject = useLocation();

  function getBreadcrumbParts(url: string): string[] {
    url = url.slice(1);
    const parts: string[] = url.split("/");

    return parts[0] == "" ? ["home", "products"] : parts;
  }

  const breadCrumbParts: Array<string> = getBreadcrumbParts(
    pathObject.pathname
  );

  return (
    <div className="mx-auto w-full max-w-7xl mt-6 px-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          {breadCrumbParts.map((part, idx) => (
            <React.Fragment key={idx}>
              <li>
                <div>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="capitalize">{part}</span>
                  </a>
                </div>
              </li>
              {idx !== breadCrumbParts.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
