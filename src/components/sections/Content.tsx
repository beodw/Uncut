import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

// <Route
// key={idx}
// path={route.path}
// exact={route.exact}
// name={route.name}
// element={<route.component />}
// />

const Content = () => {
  return (
    <div className="my-16 grow mx-auto w-full max-w-7xl flex flex-col items-start align-baseline">
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                // exact={route.exact}
                // name={route.name}
                element={<route.component />}
              />
            )
          );
        })}
      </Routes>
    </div>
  );
};

export default Content;
