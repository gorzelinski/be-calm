import React from "react";
import "./my-quotes.css";
import Blockquote from "./blockquote";

const quotes = [
  {
    body: "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralysed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it.",
    author: "Seneca",
    source: "Letter CV",
  },
  {
    body: "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralysed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it.",
    author: "Seneca",
    source: "Letter CV",
  },
  {
    body: "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralysed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it.",
    author: "Seneca",
    source: "Letter CV",
  },
];

const MyQuotes = () => {
  return (
    <div className="section">
      <h2 className="headings heading-1 margin-bottom-big">My quotes</h2>
      {quotes.map((quote, index, array) => (
        <>
          <Blockquote
            key={`quote-${index}`}
            body={quote.body}
            author={quote.author}
            source={quote.source}
          ></Blockquote>
          {array.length === index + 1 ? null : <hr className="spacer"></hr>}
        </>
      ))}
    </div>
  );
};

export default MyQuotes;
