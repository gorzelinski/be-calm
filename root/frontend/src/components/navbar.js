import React from "react";

const Navbar = () => {
  return (
    <nav className="navigation" aria-label="main">
      <button className="button button-icon">
        <ion-icon name="home" size="large"></ion-icon>
        <p className="ui ui-text-small">Home</p>
      </button>
      <button className="button button-icon">
        <ion-icon name="bookmark-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Bookmark</p>
      </button>
      <button className="button button-icon">
        <ion-icon name="refresh-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">Next quote</p>
      </button>
      <button className="button button-icon">
        <ion-icon name="reader-outline" size="large"></ion-icon>
        <p className="ui ui-text-small">My quotes</p>
      </button>
    </nav>
  );
};

export default Navbar;
