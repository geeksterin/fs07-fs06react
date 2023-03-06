import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul>
        {/* <a href="/home">
          <li>Home</li>
        </a>
        <a href="/contact">
          <li>Contact</li>
        </a>
        <a href="/about">
          <li>About Us</li>
        </a>
        <a href="/someOtherPage">
          <li>some other page</li>
        </a> */}
        <NavLink className="nav-bar-link" to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/about">
          <li>About Us</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/users">
          <li>users</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/filter">
          <li>Filter</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/restedroutes">
          <li>restedroutes</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/uselocation">
          <li>uselocation</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/login">
          <li>login</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/someOtherPage">
          <li>some other page</li>
        </NavLink>
        {/* <NavLink className="nav-bar-link" to="/users/rishabh">
          <li>Rishabh</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/users/geekster">
          <li>Geekster</li>
        </NavLink>
        <NavLink className="nav-bar-link" to="/users/sharma">
          <li>sharma</li>
        </NavLink> */}
      </ul>
    </>
  );
};

export default Navbar;
