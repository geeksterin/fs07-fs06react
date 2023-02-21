import React, { useState } from "react";
import './header.css'
const Header = ({ darkTheme, setDarkTheme }) => {
    // const dark = {backgroundColor:"black", color:"white"}
    // const light = {backgroundColor:"white", color:"black"}
  return (
    <>
      <div className="header" 
    //   style={darkTheme ? dark : light}
      style={darkTheme}
      >
        <div className="logo">Geekster</div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="button">
          <button
            onClick={() => {
            //   setDarkTheme(!darkTheme);
            //   setDarkTheme(!darkTheme);
              if(darkTheme.color === "white"){
                setDarkTheme({backgroundColor:"white", color:"black"})
            }else{
                setDarkTheme({backgroundColor:"black", color:"white"})
              }
              
            }}
          >
            Get Theme
            {/* {darkTheme ? "Get Light Theme" : "Get Dark Theme" } */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
