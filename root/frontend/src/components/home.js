import React from "react";
import { useOutletContext } from "react-router-dom";
import "./home.css";
import Blockquote from "./blockquote";

const Home = () => {
  const { quote, quotes, fetchQuote, addQuote, deleteQuote } =
    useOutletContext();
  const duplicate = quotes.find((myQuote) => myQuote.body === quote.body);

  return (
    <div className="hero home">
      <div className="quote quote-main">
        <button
          className="button button-icon"
          onClick={() =>
            duplicate ? deleteQuote(duplicate._id) : addQuote(quote)
          }
          aria-label="Bookmark quote"
          title="Bookmark quote"
        >
          <ion-icon
            name={`bookmark${duplicate ? "" : "-outline"}`}
            size="large"
          ></ion-icon>
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
