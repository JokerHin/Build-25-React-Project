import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/pages/cart";
import Home from "./components/pages/home";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
