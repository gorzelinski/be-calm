import React from "react";
import "./home.css";
import Blockquote from "./blockquote";

const quote = {
  body: "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralysed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it.",
  author: "Seneca",
  source: "Letter CV",
};

const Home = () => {
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
