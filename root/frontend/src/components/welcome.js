import React from "react";

const Welcome = () => {
  return (
    <div className="wrapper hero">
      <h1 className="headings heading-1">Be calm</h1>
      <p className="body paragraph-small">Your daily dose of calmness.</p>
      <input
        className="ui ui-text input margin"
        type="email"
        placeholder="Email"
        required
      ></input>
      <input
        className="ui ui-text input margin"
        type="password"
        placeholder="Password"
        required
      ></input>
      {/* <p className="ui ui-text">Login</p> */}
      {/* <p className="ui ui-text-small">Small ui text</p> */}
      <div className="navigation">
        <button className="ui ui-text button button-primary center margin">
          Login
        </button>
        <button className="ui ui-text button button-outline center margin">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Welcome;
