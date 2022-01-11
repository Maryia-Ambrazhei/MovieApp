import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';

import MovieDetailedCard from './MovieDetailedCard/MovieDetailedCard.jsx';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(0);

  const getMovieDetails = () => {
    const APIkey = 'a5bb8f3c75b62747ed81ad005cfcb02e';
    fetch(`https://api.themoviedb.org/3/movie/634649?api_key=${APIkey}`)
      .then(stream => stream.json())
      .then(movie => setMovie(movie));
  };
  useEffect(() => {
    getMovieDetails(634649);
  }, []);

  return <div className="page-wrapper">{movie && <MovieDetailedCard movie={movie} />}</div>;
};

export default MovieDetailsPage;
