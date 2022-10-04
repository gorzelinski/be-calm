import React, { useContext } from "react";
import { PageContext } from "../App";

const Navbar = () => {
  const { page, setPage } = useContext(PageContext);
  const setClass = (className, page, currentPage) =>
    page === currentPage ? className : `${className}-outline`;
  const shouldDisable = page !== "home";

  return (
    <nav className="navigation" aria-label="main">
      <button className="button button-icon" onClick={() => setPage("home")}>
        <ion-icon name={setClass("home", "home", page)} size="large"></ion-icon>
        <p className="ui ui-text-small">Home</p>
      </button>
      <button className="button button-icon" disabled={shouldDisable}>
        <ion-icon name="bookmark-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Bookmark</p>
      </button>
      <button className="button button-icon" disabled={shouldDisable}>
        <ion-icon name="refresh-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Next quote</p>
      </button>
      <button
        className="button button-icon"
        onClick={() => setPage("my-quotes")}
      >
        <ion-icon
          name={setClass("reader", "my-quotes", page)}
          size="large"
        ></ion-icon>
        <p className="ui ui-text-small">My quotes</p>
      </button>
    </nav>
  );
};

export default Navbar;
