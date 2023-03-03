import "./App.css";
import CarouselComp from "./Components/Banner/CarouselComp";
import HomePage from "./Components/HomePage/HomePage";
import PrimarySearchAppBar from "./Components/Navbar/PrimarySearchAppBar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Components/productPage/ProductPage";
import { createContext, useState } from "react";
import CartPage from "./Components/cartpage/CartPage";

export const currentProductDetails = createContext();
function App() {
  const [state, setstate] = useState(null);
  const [cartItems, setCartItems] = useState({
    allCartItems: [],
    GrandTotal: null,
    Discount: null,
    couponCode: null,
    DeliveryCharges:null
  });
  return (
    <currentProductDetails.Provider
      value={{ state: state, setstate: setstate ,cartItems:cartItems, setCartItems:setCartItems }}
    >
      <div className="App">
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </currentProductDetails.Provider>
  );
}

export default App;
