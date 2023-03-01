import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/someOtherPage">
          <li>some other page</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
