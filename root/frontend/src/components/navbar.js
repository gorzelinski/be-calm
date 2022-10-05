import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ fetchQuote }) => {
  const setClass = (className, page, currentPage) =>
    page === currentPage ? className : `${className}-outline`;
  // const shouldDisable = page !== "home";

  return (
    <nav className="navigation" aria-label="main">
      <Link to="/" className="button button-icon">
        <ion-icon name="home" size="large"></ion-icon>
        <p className="ui ui-text-small">Home</p>
      </Link>
      <button className="button button-icon">
        <ion-icon name="bookmark-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Bookmark</p>
      </button>
      <button className="button button-icon" onClick={() => fetchQuote()}>
        <ion-icon name="refresh-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Next quote</p>
      </button>
      <Link to="/my-quotes/" className="button button-icon">
        <ion-icon name="reader" size="large"></ion-icon>
        <p className="ui ui-text-small">My quotes</p>
      </Link>
    </nav>
  );
};

export default Navbar;
