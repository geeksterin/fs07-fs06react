import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { globalData } from "../../App";
import MovieCard from "../moviecard/MovieCard";

const MovieList = ({ allMovies }) => {
  const context = useContext(globalData);
  console.log("context from movielist", context);
  const { category } = useParams();
  console.log("allMovies from movielist", allMovies);
  return (
    <>
      <div className="movielist">
        <h2> {category && category} </h2>
        <div className="movie_list">
          <MovieCard
            allMovies={
              category === "popular"
                ? context.popularMoviesFromApi
                : category === "top_rated"
                ? context.topRatedMoviesFromApi
                : category === "upcoming"
                ? context.upcomingMoviesFromApi
                : [...context.popularMoviesFromApi, ...context.topRatedMoviesFromApi, ...context.upcomingMoviesFromApi]
            }
          />
        </div>
      </div>
    </>
  );
};

export default MovieList;
