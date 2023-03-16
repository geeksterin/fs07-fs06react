import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { globalData } from "../../App";
import { searchedMovies } from "../../functions/GetMovieList";
import "./header.css";

const Header = () => {
  
  const context = useContext(globalData);

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
          <input
            onChange={(e) => {
              searchedMovies(e, context.state, context.setState, context);
            }}
            type="text"
            placeholder="Search Here"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
