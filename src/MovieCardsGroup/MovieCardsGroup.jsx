import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieCardsGroup.css';

const MovieCardsGroup = () => {
  return (
    <div className="results-section">
      <div className="movie-cards-group">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieCardsGroup;
