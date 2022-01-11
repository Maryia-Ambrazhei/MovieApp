import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import MovieDetailedCard from '../MovieDetailedCard/MovieDetailedCard.jsx';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  let params = useParams();
  console.log(params);

  const getMovieDetails = movieId => {
    const APIkey = 'a5bb8f3c75b62747ed81ad005cfcb02e';
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIkey}`)
      .then(stream => stream.json())
      .then(movie => setMovie(movie));
  };
  useEffect(() => {
    getMovieDetails(params.movieId);
  }, []);

  return <div className="page-wrapper">{movie && <MovieDetailedCard movie={movie} />}</div>;
};

export default MovieDetailsPage;
