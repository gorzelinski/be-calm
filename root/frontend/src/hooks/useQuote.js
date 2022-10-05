import { useState, useEffect, useCallback } from "react";

export const useQuote = () => {
  const [quote, setQuote] = useState({});
  const fetchQuote = useCallback(() => {
    fetch("https://stoic-server.herokuapp.com/random")
      .then((result) => result.json())
      .then((data) => {
        const { body, author, quotesource } = data[0];
        setQuote({
          body,
          author,
          source: quotesource,
        });
      })
      .catch((e) => {
        console.log("Error occurred while fetching quote", e);
      });
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return { quote, fetchQuote };
};
