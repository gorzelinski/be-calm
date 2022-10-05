import React from "react";
import "./home.css";
import Blockquote from "./blockquote";

const Home = ({ quote }) => {
  return (
    <div className="hero home">
      <Blockquote
        body={quote.body}
        author={quote.author}
        source={quote.source}
      ></Blockquote>
    </div>
  );
};

export default Home;
