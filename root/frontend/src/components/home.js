import React from "react";
import { useOutletContext } from "react-router-dom";
import "./home.css";
import Blockquote from "./blockquote";

const Home = () => {
  const { quote } = useOutletContext();
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
