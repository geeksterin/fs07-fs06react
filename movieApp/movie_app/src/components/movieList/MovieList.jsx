import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../moviecard/MovieCard";

const MovieList = () => {
  const { category } = useParams();

  return (
    <>
      <div className="movielist">
        <h2> {(category && category).toUpperCase()} </h2>
        <div className="movie_list">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default MovieList;
