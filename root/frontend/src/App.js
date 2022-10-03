import "./App.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";

function App() {
  return (
    <div className="wrapper">
      <h1 className="headings heading-1">Heading 1</h1>
      <h2 className="headings heading-2">Heading 2</h2>
      <h3 className="headings heading-3">Heading 3</h3>
      <p className="body paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates aspernatur perferendis asperiores commodi nostrum sequi
        fugiat. Saepe laudantium expedita est placeat natus quidem cumque quia
        odio distinctio iusto ratione pariatur illum voluptatem voluptas cum
        quibusdam, nostrum laborum aliquam voluptatibus?
      </p>
      <p className="body paragraph-small">
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
      ></input>
      <nav className="navbar margin">
        <button className="button button-icon">
          <ion-icon name="home" size="large"></ion-icon>
          <p className="ui ui-text-small">Home</p>
        </button>
        <button className="button button-icon">
          <ion-icon name="bookmark-outline" size="large"></ion-icon>
          <p className="ui ui-text-small">Bookmark</p>
        </button>
        <button className="button button-icon">
          <ion-icon name="refresh-outline" size="large"></ion-icon>
          <p className="ui ui-text-small">Next quote</p>
        </button>
        <button className="button button-icon">
          <ion-icon name="reader-outline" size="large"></ion-icon>
          <p className="ui ui-text-small">My quotes</p>
        </button>
      </nav>
      <div className="avatar ui-text center">M</div>
    </div>
  );
}

export default App;
