import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Footers from "./Components/Footers";
import Landing from "./Components/Landing";
import Landing2 from "./Components/Landing2";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import PLefts from "./Components/PLefts";
import PRight from "./Components/PRight";
import Product from "./Components/Product";
import Sliders from "./Components/Sliders";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const [count, setCount] = useState(0);
  console.log(window.location.href.includes("/products"));
  const [topMargin, setTopMargin] = useState(0);
  // Ref for the top fixed div
  const topDivRef = useRef(null);
  useEffect(() => {
    if (topDivRef.current) {
      setTopMargin(topDivRef.current.offsetHeight);
    }
  }, []);
  const [cartItems, setCartItems] = useState([]);
  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }
  console.log(cartItems);
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Nav topDivRef={topDivRef} />

        <Routes>
          <Route path="/" element={<Landing topMargin={topMargin} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Cart
                topMargin={topMargin}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/products" element={<Products addCart={addCart} />} />
          <Route path="/pops" element={<Product />} />
          <Route path="/app" element={<Content />} />
        </Routes>
        {/* <Landing2 />
        <Sliders />
        <Footers /> */}
      </NavbarProvider>
    </BrowserRouter>
  );
}

export default App;
