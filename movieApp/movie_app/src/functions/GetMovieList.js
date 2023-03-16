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
export const getMovieListByID = (id, setMoviesFromApi) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMoviesFromApi(data);
    });
};

export const searchedMovies = (e, setstate, context) => {
  const arr = [
    ...context.popularMoviesFromApi,
    ...context.topRatedMoviesFromApi,
    ...context.upcomingMoviesFromApi,
  ];

  const filteredarr = arr.filter((ele)=>{
    if((ele.original_title.toUpperCase()).includes(e.target.value.toUpperCase())){
      return ele
    }
    return null
  })
  setstate(filteredarr)
};
