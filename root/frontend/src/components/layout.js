import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser, useQuote } from "../hooks";
import "./navbar.css";
import Navbar from "./navbar";
import Header from "./header";

const Layout = ({ user, token, setToken }) => {
  const navigate = useNavigate();
  const { quote, quotes, fetchQuote, addQuote, deleteQuote } = useQuote(token);
  const { logoutUser, logoutAllUser, deleteUser } = useUser(token, setToken);

  useEffect(() => {
    if (!token) {
      navigate("/login/");
    }
  }, [token, navigate]);

  return (
    <div className="wrapper">
      <Header
        user={user}
        logoutUser={logoutUser}
        logoutAllUser={logoutAllUser}
        deleteUser={deleteUser}
        setToken={setToken}
      ></Header>
      <Navbar
        quote={quote}
        addQuote={addQuote}
        fetchQuote={fetchQuote}
      ></Navbar>
      <Outlet
        context={{
          token,
          quote,
          quotes,
          fetchQuote,
          addQuote,
          deleteQuote,
        }}
      ></Outlet>
    </div>
  );
};

export default Layout;
