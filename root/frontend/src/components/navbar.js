import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation" aria-label="main">
      <Link to="/" className="button button-icon">
        <ion-icon name="home" size="large"></ion-icon>
        <p className="ui ui-text-small">Home</p>
      </Link>
      <Link to="/my-quotes/" className="button button-icon">
        <ion-icon name="reader" size="large"></ion-icon>
        <p className="ui ui-text-small">My quotes</p>
      </Link>
    </nav>
  );
};

export default Navbar;
