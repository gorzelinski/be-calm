import React from "react";
import { useOutletContext } from "react-router-dom";

import Quote from "../components/quote";
import sections from "../components/sections.module.css";

const Home = () => {
  const { quote, quotes, fetchQuote, addQuote, deleteQuote } =
    useOutletContext();
  const duplicate = quotes.find((myQuote) => myQuote.body === quote.body);

  return (
    <div className={`${sections.hero} ${sections.home}`}>
      <Quote
        featured={true}
        quote={quote}
        duplicate={duplicate}
        fetchQuote={fetchQuote}
        addQuote={addQuote}
        deleteQuote={deleteQuote}
      ></Quote>
    </div>
  );
};

export default Home;
