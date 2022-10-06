import React from "react";
import "./my-quotes.css";
import Blockquote from "./blockquote";
import { useMyQuotes } from "../hooks";
import { useOutletContext } from "react-router-dom";

const MyQuotes = () => {
  const { token } = useOutletContext();
  const { quotes, deleteQuote } = useMyQuotes(token);

  return (
    <div className="section">
      <h2 className="headings heading-1 margin-bottom-big">My quotes</h2>
      {quotes.map((quote, index, array) => (
        <div className="quote" key={quote._id}>
          <button
            className="button button-icon"
            aria-label="Remove quote"
            title="Remove quote"
            onClick={() => deleteQuote(quote._id)}
          >
            <ion-icon name="bookmark" size="large"></ion-icon>
          </button>
          <Blockquote
            body={quote.body}
            author={quote.author}
            source={quote.source}
          ></Blockquote>
        </div>
      ))}
    </div>
  );
};

export default MyQuotes;
