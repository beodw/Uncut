import React from "react";
import Footer from "../sections/Footer";
import NavBar from "../sections/NavBar";
import Content from "../sections/Content";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
