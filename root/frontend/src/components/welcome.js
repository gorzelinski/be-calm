import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Your daily dose of calmness.");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        setEmail("");
        setPassword("");
        setMessage("User logged successfully");
        setToken(data.token);
      } else {
        setMessage("Some error occurred during login.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper hero">
      <h1 className="headings heading-1">Be calm</h1>
      <p className="body paragraph-small">{message}</p>
      <form onSubmit={handleSubmit}>
        <input
          className="ui ui-text input margin"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => setMessage("Your daily dose of calmness.")}
          placeholder="Email"
          required
        ></input>
        <input
          className="ui ui-text input margin"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setMessage("Your daily dose of calmness.")}
          value={password}
          placeholder="Password"
          required
        ></input>
        <div className="navigation">
          <button className="ui ui-text button button-primary center margin">
            Login
          </button>
          <button className="ui ui-text button button-outline center margin">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Welcome;
