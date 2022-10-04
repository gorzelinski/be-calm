import "./App.css";
import "./normalize.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";
import Layout from "./components/layout";
import Home from "./components/home";
import MyQuotes from "./components/my-quotes";

function App() {
  return (
    <Layout>
      {/* <h1 className="headings heading-1">Heading 1</h1>
      <h2 className="headings heading-2">Heading 2</h2>
      <h3 className="headings heading-3">Heading 3</h3> */}
      {/* <Home></Home> */}
      <MyQuotes></MyQuotes>
      {/* <p className="body paragraph-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates aspernatur perferendis asperiores commodi nostrum sequi
        fugiat. Saepe laudantium expedita est placeat natus quidem cumque quia
        odio distinctio iusto ratione pariatur illum voluptatem voluptas cum
        quibusdam, nostrum laborum aliquam voluptatibus?
      </p>
      <p className="ui ui-text">Login</p>
      <p className="ui ui-text-small">Small ui text</p>
      <button className="ui ui-text button button-primary center margin">
        Login
      </button>
      <button className="ui ui-text button button-outline center margin">
        Login
      </button>
      <input
        className="ui ui-text input margin"
        type="email"
        placeholder="Email"
      ></input>
      <input
        className="ui ui-text input margin"
        type="password"
        placeholder="Password"
      ></input> */}
    </Layout>
  );
}

export default App;
