import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { createContext } from "react";
import { getMovieList } from "./functions/GetMovieList";
import MovieList from "./components/movieList/MovieList";
import MovieDetails from "./pages/movieDetails/MovieDetails";

export const globalData = createContext();

function App() {
  const [popularMoviesFromApi, setPopularMoviesFromApi] = useState([]);
  const [upcomingMoviesFromApi, setUpcomingMoviesFromApi] = useState([]);
  const [topRatedMoviesFromApi, setTopRatedMoviesFromApi] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    getMovieList(setPopularMoviesFromApi, "popular");
    getMovieList(setTopRatedMoviesFromApi, "top_rated");
    getMovieList(setUpcomingMoviesFromApi, "upcoming");
  }, []);

  return (
    <globalData.Provider
      value={{
        popularMoviesFromApi: popularMoviesFromApi,
        topRatedMoviesFromApi: topRatedMoviesFromApi,
        upcomingMoviesFromApi: upcomingMoviesFromApi,
        state, setState
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/:category" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </globalData.Provider>
  );
}

export default App;
