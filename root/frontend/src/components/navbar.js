import React from "react";
import { Link } from "react-router-dom";

import navigation from "./navigation.module.css";
import button from "./button.module.css";
import typography from "./typography.module.css";

const Navbar = () => {
  return (
    <nav className={`${navigation.base} ${navigation.nav}`} aria-label="main">
      <Link to="/" className={`${button.base} ${button.icon}`}>
        <ion-icon name="home" size="large"></ion-icon>
        <p className={`${typography.ui} ${typography["ui-text-small"]}`}>
          Home
        </p>
      </Link>
      <Link to="/my-quotes/" className={`${button.base} ${button.icon}`}>
        <ion-icon name="reader" size="large"></ion-icon>
        <p className={`${typography.ui} ${typography["ui-text-small"]}`}>
          My quotes
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
