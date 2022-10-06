import React from "react";
import { useOutletContext } from "react-router-dom";
import "./home.css";
import Blockquote from "./blockquote";

const Home = () => {
  const { quote, fetchQuote, addQuote } = useOutletContext();
  return (
    <div className="hero home">
      <div className="navigation">
        <button
          className="button button-icon"
          onClick={() => addQuote(quote)}
          aria-label="Bookmark quote"
          title="Bookmark quote"
        >
          <ion-icon name="bookmark-outline" size="large"></ion-icon>
        </button>
        <Blockquote
          body={quote.body}
          author={quote.author}
          source={quote.source}
        ></Blockquote>
        <button
          className="button button-icon"
          onClick={() => fetchQuote()}
          aria-label="Next quote"
          title="Next quote"
        >
          <ion-icon name="refresh-outline" size="large"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Home;
