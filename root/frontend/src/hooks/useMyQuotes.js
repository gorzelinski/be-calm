import { useEffect, useState } from "react";

export const useMyQuotes = (token) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
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

  return { quotes };
};
