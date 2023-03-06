import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import { useState } from "react";
import Users from "./components/Users";
import Filter from "./components/Filter";
import NestedRoutes from "./components/NestedRoutes";
import Rishabh from "./components/Rishabh";
import Geekster from "./components/Geekster";
import Sharma from "./components/Sharma";
import UseLocationHook from "./components/UseLocationHook";
import LoginPage from "./components/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const GlobalData = createContext();
function App() {
  const [state, setstate] = useState({name:"", age:null, phno: null });
  
  return (
    <GlobalData.Provider value={{state:state, setstate:setstate}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes Component = {Home} />} />
          <Route path="/home" element={<ProtectedRoutes Component = {Home} />} />
          <Route path="/about" element={<ProtectedRoutes Component = {About} />}  />
          <Route path="/contact" element={<ProtectedRoutes Component = {Contact} />} />
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/users/:id" element={<Users />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/restedroutes/" element={<NestedRoutes />} >
            <Route path="rishabh" element={<Rishabh />} />
            <Route path="geekster" element={<Geekster />} />
            <Route path="sharma" element={<Sharma />} />
          </Route>


          <Route path="/uselocation" element={<UseLocationHook />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<>404 page not found</>} />

        </Routes>
      </div>
    </GlobalData.Provider>
  );
}

export default App;
