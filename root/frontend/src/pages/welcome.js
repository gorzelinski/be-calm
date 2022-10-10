import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import typography from "../components/typography.module.css";
import sections from "../components/sections.module.css";
import form from "../components/form.module.css";
import button from "../components/button.module.css";
import navigation from "../components/navigation.module.css";

const Welcome = ({ setUser, token, setToken }) => {
  const navigate = useNavigate();
  const [action, setAction] = useState("login");
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
      const res = await fetch(
        `http://localhost:4000/users${action === "login" ? "/login" : ""}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        setEmail("");
        setPassword("");
        setMessage("User logged successfully");
        setToken(data.token);
        setUser(data.user);
      } else if (res.status === 201) {
        const data = await res.json();
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        setToken(data.token);
        setUser(data.user);
      } else {
        setMessage("Some error occurred during login.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`${sections.wrapper} ${sections.hero}`}>
      <h1 className={`${typography.headings} ${typography["heading-1"]}`}>
        Be calm
      </h1>
      <p className={`${typography.body} ${typography["paragraph-small"]}`}>
        {message}
      </p>
      <form className={form.container} onSubmit={handleSubmit}>
        <input
          className={`${typography.ui} ${typography["ui-text"]} ${form.input} margin-bottom`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => setMessage("Your daily dose of calmness.")}
          placeholder="Email"
          required
        ></input>
        <input
          className={`${typography.ui} ${typography["ui-text"]} ${form.input} margin-bottom`}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setMessage("Your daily dose of calmness.")}
          value={password}
          placeholder="Password"
          required
        ></input>
        <div className={navigation.nav}>
          <button
            className={`${typography.ui} ${typography["ui-text"]} ${button.base} ${button.primary} center`}
            onClick={() => setAction("login")}
          >
            Login
          </button>
          <button
            className={`${typography.ui} ${typography["ui-text"]} ${button.base} ${button.outline} center`}
            onClick={() => setAction("sign-up")}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Welcome;
