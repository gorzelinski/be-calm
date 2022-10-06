import { useCallback, useEffect, useState } from "react";

export const useMyQuotes = (token) => {
  const [quotes, setQuotes] = useState([]);

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
        console.log(data);
      })
      .catch((e) => {
        console.log("Error occurred while fetching quotes", e);
      });
  }, [token]);

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
    fetchQuotes();
  }, [fetchQuotes]);

  return { quotes, deleteQuote };
};
