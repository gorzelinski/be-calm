import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuote } from "../hooks";
import "./navbar.css";
import Navbar from "./navbar";
import Header from "./header";

const Layout = ({ token }) => {
  const navigate = useNavigate();
  const { quote, fetchQuote, addQuote } = useQuote(token);

  useEffect(() => {
    if (!token) {
      navigate("/login/");
    }
  }, [token, navigate]);

  return (
    <div className="wrapper">
      <Header></Header>
      <Navbar
        quote={quote}
        addQuote={addQuote}
        fetchQuote={fetchQuote}
      ></Navbar>
      <Outlet context={{ quote, fetchQuote }}></Outlet>
    </div>
  );
};

export default Layout;
