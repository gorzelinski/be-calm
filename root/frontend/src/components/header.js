import React, { useState } from "react";

import navigation from "./navigation.module.css";
import typography from "./typography.module.css";
import button from "./button.module.css";

const Header = ({ user = {}, logoutUser, logoutAllUser, deleteUser }) => {
  const letter = user.email?.substring(0, 1).toUpperCase();
  const [menu, setMenu] = useState(false);

  return (
    <header className={`${navigation.nav} ${navigation.header}`}>
      <h1 className={`${typography.headings} ${typography["heading-1"]}`}>
        Be calm
      </h1>
      <button
        aria-label="Menu"
        className={`${button.base} ${button.primary} ${button.avatar} ${typography["ui-text"]} center`}
        onClick={() => setMenu(!menu)}
      >
        {letter}
      </button>
      {menu ? (
        <div className={navigation.modal}>
          <button
            className={`${button.base} ${button.text} ${typography.ui} ${typography["ui-text-small"]}`}
            onClick={() => logoutUser()}
          >
            Logout
          </button>
          <button
            className={`${button.base} ${button.text} ${typography.ui} ${typography["ui-text-small"]}`}
            onClick={() => logoutAllUser()}
          >
            Logout from all devices
          </button>
          <button
            className={`${button.base} ${button.text} ${typography.ui} ${typography["ui-text-small"]}`}
            onClick={() => deleteUser()}
          >
            Delete account
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
