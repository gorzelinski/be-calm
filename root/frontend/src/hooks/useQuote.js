import { useState, useEffect, useCallback } from "react";

export const useQuote = (token) => {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

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

  const fetchQuotes = useCallback(() => {
    fetch("http://localhost:4000/quotes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((e) => {
        console.log("Error occurred while fetching quotes", e);
      });
  }, [token]);

  const addQuote = useCallback(
    (quote) => {
      fetch("http://localhost:4000/quotes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
      })
        .then(() => {
          fetchQuotes();
        })
        .catch((e) => {
          console.log("Error occurred while adding quote", e);
        });
    },
    [token, fetchQuotes]
  );

  const deleteQuote = useCallback(
    (id) => {
      fetch(`http://localhost:4000/quotes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          fetchQuotes();
        })
        .catch((e) => {
          console.log("Error occurred while deleting quote", e);
        });
    },
    [token, fetchQuotes]
  );

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return { quote, quotes, fetchQuote, addQuote, deleteQuote };
};
