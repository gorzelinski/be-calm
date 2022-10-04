import "./App.css";
import "./normalize.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";
import Layout from "./components/layout";
import Home from "./components/home";
import MyQuotes from "./components/my-quotes";
import Welcome from "./components/welcome";

function App() {
  return (
    // <Layout>
    //   <Home></Home>
    //   <MyQuotes></MyQuotes>
    // </Layout>
    <Welcome></Welcome>
  );
}

export default App;
