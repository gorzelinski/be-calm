import React from "react";
import "./my-quotes.css";
import Blockquote from "./blockquote";
import { useMyQuotes } from "../hooks";
import { useOutletContext } from "react-router-dom";

const MyQuotes = () => {
  const { token } = useOutletContext();
  const { quotes } = useMyQuotes(token);

  return (
    <div className="section">
      <h2 className="headings heading-1 margin-bottom-big">My quotes</h2>
      {quotes.map((quote, index, array) => (
        <div key={quote._id}>
          <Blockquote
            body={quote.body}
            author={quote.author}
            source={quote.source}
          ></Blockquote>
          {array.length === index + 1 ? null : <hr className="spacer"></hr>}
        </div>
      ))}
    </div>
  );
};

export default MyQuotes;
