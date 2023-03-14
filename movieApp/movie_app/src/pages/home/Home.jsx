import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { globalData } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(globalData);
  console.log("context", context);

  return (
    <>
      <div className="home">
        <div className="poster">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={3}
            showStatus={false}
          >
            {context.popularMoviesFromApi.map((ele) => {
              return (
                <>
                  <Link to={`/movie/${ele.id}`}>
                    <div className="posterImage">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          ele && ele.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="posterImage_overlay">
                      <div className="posterImage_title">
                        {ele && ele.original_title}
                      </div>
                      <div className="posterImage_releasingDate_rating">
                        {ele && ele.release_date}
                        <span>{ele && ele.vote_average}</span>
                      </div>
                      <div className="posterImageDescription">
                        {ele && ele.overview}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
