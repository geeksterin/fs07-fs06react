import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/" className="headerIcon">
            Movie App
          </Link>
          <div className="navbar">

          <Link to="/movies/popular">Popular</Link>
          <Link to="/movies/top_rated">Top Rated</Link>
          <Link to="/movies/upcoming">Upcoming</Link>
          </div>
          <input type="text" placeholder="Search Here" />
        </div>
      </div>
    </>
  );
};

export default Header;
