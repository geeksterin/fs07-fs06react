import React, { useEffect, useState } from "react";
import { getMovieListByID } from "../../functions/GetMovieList";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMoviesFromApi] = useState({});
  useEffect(() => {
    getMovieListByID(id, setMoviesFromApi, movies);
  }, [id]);

  return <div>{console.log('moviess',movies)}</div>;
};

export default MovieDetails;
