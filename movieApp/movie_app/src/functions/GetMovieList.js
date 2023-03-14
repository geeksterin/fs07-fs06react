export const getMovieList = (setMoviesFromApi, category) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${
      category ? category : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesFromApi(data.results);
    });
};
