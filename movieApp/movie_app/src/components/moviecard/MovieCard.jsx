import React from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ allMovies }) => {
  return (
    <>
      <div className="mainCardContainer">
        {typeof allMovies !== "object" || allMovies.length !== 0 ? (
          <>
            {allMovies.map((ele, idx) => {
              return (
                <>
                  <Link to={`/movie/${ele.id}`} key={idx}>
                    <div className="card">
                      <img
                        className="cardImg"
                        src={`https://image.tmdb.org/t/p/original/${
                          ele && ele.poster_path
                        }`}
                        alt=""
                      />
                      <div className="cardOverlay">
                        <div className="card_Title">
                          {ele && ele.original_title}
                        </div>
                        <div className="posterImageReleasingDateRating">
                          {ele && ele.release_date}
                          <span>{ele && ele.vote_average}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        ) : // <>hello</>
        null}
      </div>
    </>
  );
};

export default MovieCard;
