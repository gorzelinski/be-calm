import React from "react";
import "./header.css";

const Header = ({ user = {} }) => {
  const avatar = user.email?.substring(0, 1).toUpperCase();

  return (
    <header className="navigation">
      <h1 className="headings heading-3">Be calm</h1>
      <div className="avatar ui-text center">{avatar}</div>
    </header>
  );
};

export default Header;
