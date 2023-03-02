import "./App.css";
import CarouselComp from "./Components/Banner/CarouselComp";
import HomePage from "./Components/HomePage/HomePage";
import PrimarySearchAppBar from "./Components/Navbar/PrimarySearchAppBar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Components/productPage/ProductPage";
import { createContext, useState } from "react";
export const currentProductDetails = createContext();
function App() {
  const [state, setstate] = useState(null);

  return (
    <currentProductDetails.Provider
      value={{ state: state, setstate: setstate }}
    >
      <div className="App">
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </currentProductDetails.Provider>
  );
}

export default App;
