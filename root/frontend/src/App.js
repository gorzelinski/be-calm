import { createContext } from "react";
import "./App.css";
import "./normalize.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";
import { useQuote } from "./hooks";
import Layout from "./components/layout";
import Home from "./components/home";
// import MyQuotes from "./components/my-quotes";
// import Welcome from "./components/welcome";

export const QuoteContext = createContext({});

const App = () => {
  const { quote, fetchQuote } = useQuote();

  return (
    <>
      <QuoteContext.Provider value={{ quote, fetchQuote }}>
        <Layout>
          <Home quote={quote}></Home>
        </Layout>
      </QuoteContext.Provider>
    </>
  );
};

export default App;
