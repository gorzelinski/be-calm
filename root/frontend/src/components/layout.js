import React from "react";
import "./navbar.css";
import Navbar from "./navbar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Layout;
