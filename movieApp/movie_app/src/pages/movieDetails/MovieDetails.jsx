import React, { useEffect, useState } from "react";
import { getMovieListByID } from "../../functions/GetMovieList";
import { useParams } from "react-router-dom";
import './moviedetails.css'
const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMoviesFromApi] = useState({});
  useEffect(() => {
    getMovieListByID(id, setMoviesFromApi, movies);
  }, [id,movies]);

  return (
    <div className="movieDetails">
      <div className="movie">
      <div className="overLay"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movies && movies.backdrop_path
          }`}
          alt=""
        />
      </div>

      <div className="movieMoreDetails">
        <div className="movieMoreDetailsLeft">
          <div className="moviePoster">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movies && movies.poster_path
              }`}
              alt=""
              className="moviePosterImage"
            />
          </div>
        </div>
        <div className="movieMoreDetailsRight">
          <div className="movieName">{movies && movies.original_title}</div>
          <div className="movieTagLine">{movies && movies.tagline}</div>
          <div className="rating">
            {movies && movies.vote_average}
          <span className="voteCount">{movies && movies.vote_count} votes</span>
          </div>
          <div className="runtime">{movies && movies.runtime} mins</div>
          <div className="releaseDate">
            release date {movies && movies.release_date}
          </div>
          <div className="genres">
            {movies && movies.genres
              ? movies.genres.map((ele, idx) => {
                  return (
                    <>
                      <span key={idx}>{ele.name}</span>
                    </>
                  );
                })
              : null}
          </div>
          <div className="overView">{movies && movies.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
