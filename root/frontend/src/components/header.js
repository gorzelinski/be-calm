import React, { useState } from "react";

const Header = ({ user = {}, logoutUser, logoutAllUser, deleteUser }) => {
  const letter = user.email?.substring(0, 1).toUpperCase();
  const [menu, setMenu] = useState(false);

  return (
    <header className="navigation">
      <h1 className="headings heading-3">Be calm</h1>
      <button
        aria-label="Menu"
        className="button button-primary avatar ui-text center"
        onClick={() => setMenu(!menu)}
      >
        {letter}
      </button>
      {menu ? (
        <div className="modal">
          <button
            className="button button-text ui ui-text-small"
            onClick={() => logoutUser()}
          >
            Logout
          </button>
          <button
            className="button button-text ui ui-text-small"
            onClick={() => logoutAllUser()}
          >
            Logout from all devices
          </button>
          <button
            className="button button-text ui ui-text-small"
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
