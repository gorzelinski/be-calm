import React from "react";

import typography from "./typography.module.css";
import blockquote from "./blockquote.module.css";
import button from "./button.module.css";

const Quote = ({
  featured = false,
  quote,
  duplicate,
  fetchQuote,
  addQuote,
  deleteQuote,
}) => {
  const { body, author, source } = quote;

  return featured ? (
    <div className={`${blockquote.base} ${blockquote.featured}`}>
      <button
        className={`${button.base} ${button.icon}`}
        onClick={() =>
          duplicate ? deleteQuote(duplicate?._id) : addQuote(quote)
        }
        aria-label="Bookmark quote"
        title="Bookmark quote"
      >
        <ion-icon
          name={`bookmark${duplicate ? "" : "-outline"}`}
          size="large"
        ></ion-icon>
      </button>
      <blockquote className={blockquote.blockquote}>
        <p className={`${typography.body} ${typography.paragraph}`}>{body}</p>
        <cite className={`${typography.body} ${typography.small}`}>
          &mdash;{author}
        </cite>
        <small className={`${typography.body} ${typography.small}`}>
          {source}
        </small>
      </blockquote>
      <button
        className={`${button.base} ${button.icon}`}
        onClick={() => fetchQuote()}
        aria-label="Next quote"
        title="Next quote"
      >
        <ion-icon name="refresh-outline" size="large"></ion-icon>
      </button>
    </div>
  ) : (
    <div className={blockquote.base}>
      <button
        className={`${button.base} ${button.icon}`}
        aria-label="Remove quote"
        title="Remove quote"
        onClick={() => deleteQuote(quote._id)}
      >
        <ion-icon name="bookmark" size="large"></ion-icon>
      </button>
      <blockquote className={blockquote.blockquote}>
        <p className={`${typography.body} ${typography.paragraph}`}>{body}</p>
        <cite className={`${typography.body} ${typography.small}`}>
          &mdash;{author}
        </cite>
        <small className={`${typography.body} ${typography.small}`}>
          {source}
        </small>
      </blockquote>
    </div>
  );
};

export default Quote;
