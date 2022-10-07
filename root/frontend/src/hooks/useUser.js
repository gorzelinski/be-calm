import { useCallback } from "react";

export const useUser = (token, setToken) => {
  const logoutUser = useCallback(() => {
    fetch("http://localhost:4000/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setToken("");
      })
      .catch((e) => {
        console.log("Error occurred while logging out", e);
      });
  }, [token, setToken]);

  const logoutAllUser = useCallback(() => {
    fetch("http://localhost:4000/users/logoutAll", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setToken("");
      })
      .catch((e) => {
        console.log("Error occurred while logging out", e);
      });
  }, [token, setToken]);

  const deleteUser = useCallback(() => {
    fetch("http://localhost:4000/users/me", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setToken("");
      })
      .catch((e) => {
        console.log("Error occurred while deleting user", e);
      });
  }, [token, setToken]);

  return { logoutUser, logoutAllUser, deleteUser };
};
