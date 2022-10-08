import React from "react";
import { useOutletContext } from "react-router-dom";

import utils from "../components/utils.module.css";
import sections from "../components/sections.module.css";
import typography from "../components/typography.module.css";
import Quote from "../components/quote";

const MyQuotes = () => {
  const { quotes, deleteQuote } = useOutletContext();

  return (
    <div className={sections.section}>
      <h2
        className={`${typography.headings} ${typography["heading-1"]} ${utils["margin-bottom-big"]}`}
      >
        My quotes
      </h2>
      {quotes.map((quote) => (
        <Quote
          key={quote._id}
          id={quote._id}
          body={quote.body}
          author={quote.author}
          source={quote.source}
          deleteQuote={deleteQuote}
        ></Quote>
      ))}
    </div>
  );
};

export default MyQuotes;
