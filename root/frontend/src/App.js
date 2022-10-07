import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import MyQuotes from "./components/my-quotes";
import Welcome from "./components/welcome";
import Layout from "./components/layout";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login/"
          element={
            <Welcome
              setUser={setUser}
              token={token}
              setToken={setToken}
            ></Welcome>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Layout user={user} token={token} setToken={setToken}></Layout>
          }
        >
          <Route index element={<Home></Home>}></Route>
          <Route path="/my-quotes/" element={<MyQuotes></MyQuotes>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
