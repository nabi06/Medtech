import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Items from "./Components/Items";
import Signup from "./Components/Signup";
import OTP2 from "./Components/OTP2";
import Password from "./Components/Password";
import Changepassword from "./Components/Changepassword";
import Checkout from "./Components/Checkout";

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
  const location = useLocation();
  return (
    <NavbarProvider>
      {location.pathname !== "/signup" && <Nav topDivRef={topDivRef} />}
      {location.pathname !== "/signin" && <Nav topDivRef={topDivRef} />}
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/otp2" element={<OTP2 />} />
        <Route path="/password" element={<Password />} />
        <Route path="/Changepassword" element={<Changepassword />} />
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
        <Route path="/app" element={<Landing topMargin={topMargin} />} />
        <Route path="/" element={<Landing topMargin={topMargin} />} />
        <Route path="/detailspage/:id" element={<Items addCart={addCart} />} />
        <Route path="/checkout" element={<Checkout topMargin={topMargin} />} />
      </Routes>
      {/* <Landing2 />
        <Sliders />
        <Footers /> */}
    </NavbarProvider>
  );
}

export default App;
