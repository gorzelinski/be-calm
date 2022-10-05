import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import "./tokens.css";
import "@fontsource/marcellus";
import "@fontsource/open-sans";
import Layout from "./components/layout";
import Home from "./components/home";
import MyQuotes from "./components/my-quotes";
import Welcome from "./components/welcome";
import PrivateRoutes from "./components/private-routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/" element={<Welcome></Welcome>}></Route>
        <Route element={<PrivateRoutes></PrivateRoutes>}>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/my-quotes/" element={<MyQuotes></MyQuotes>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
