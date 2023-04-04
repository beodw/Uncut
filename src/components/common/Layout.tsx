import React from "react";
import Footer from "../sections/Footer";
import NavBar from "../sections/NavBar";
import Content from "../sections/Content";
import Breadcrumb from "../common/Breadcrumb";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <Breadcrumb />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
