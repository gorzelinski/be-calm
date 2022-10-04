import React from "react";
import "./blockquote.css";

const Blockquote = ({ body, author, source }) => {
  return (
    <blockquote>
      <p className="body paragraph">{body}</p>
      <div className="navigation">
        <cite className="body small">&mdash;{author}</cite>
        <small className="body small">{source}</small>
      </div>
    </blockquote>
  );
};

export default Blockquote;
