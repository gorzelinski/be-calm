import { useState, createContext } from "react";
import "./App.css";
import "./normalize.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";
import Layout from "./components/layout";
import Home from "./components/home";
import MyQuotes from "./components/my-quotes";
import Welcome from "./components/welcome";

export const PageContext = createContext("home");

const App = () => {
  const [authorized, setAuthorized] = useState(true);
  const [page, setPage] = useState("home");

  const selectPage = (page) => {
    switch (page) {
      case "home":
        return <Home></Home>;
      case "my-quotes":
        return <MyQuotes></MyQuotes>;
      default:
        return <Home></Home>;
    }
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {authorized ? <Layout>{selectPage(page)}</Layout> : <Welcome></Welcome>}
    </PageContext.Provider>
  );
};

export default App;
