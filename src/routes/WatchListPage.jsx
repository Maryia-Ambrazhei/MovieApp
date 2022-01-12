import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import useWatchList from '../hooks/useWatchList.jsx';

const WatchListPage = () => {
  const { watchList, checkIfInWatchList, removeFromWatchList, addToWatchList } = useWatchList();

  const toggleWatchList = movie => {
    if (checkIfInWatchList(movie.movieId)) {
      removeFromWatchList(movie);
    } else {
      addToWatchList(movie);
    }
  };

  console.log('watch list in page: ', watchList);
  return (
    <div className="results-section">
      <div className="movie-cards-group">
        {watchList.map(movie => (
          <MovieCard
            key={movie.movieId}
            movieId={movie.movieId}
            title={movie.title}
            year={movie.year}
            imageURL={movie.imageURL}
            toggleWatchList={toggleWatchList}
            isInWatchList={checkIfInWatchList(movie.movieId)}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;