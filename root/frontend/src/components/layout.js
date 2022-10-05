import React from "react";
import { Outlet } from "react-router-dom";
import { useQuote } from "../hooks";
import "./navbar.css";
import Navbar from "./navbar";
import Header from "./header";

const Layout = () => {
  const { quote, fetchQuote } = useQuote();

  return (
    <div className="wrapper">
      <Header></Header>
      <Navbar fetchQuote={fetchQuote}></Navbar>
      <Outlet context={{ quote, fetchQuote }}></Outlet>
    </div>
  );
};

export default Layout;
