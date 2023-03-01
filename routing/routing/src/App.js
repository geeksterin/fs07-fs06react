import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import { useState } from "react";
export const GlobalData = createContext();
function App() {
  const [state, setstate] = useState({name:"", age:null, phno: null });
  
  return (
    <GlobalData.Provider value={{state:state, setstate:setstate}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<>404 page not found</>} />
        </Routes>
      </div>
    </GlobalData.Provider>
  );
}

export default App;
