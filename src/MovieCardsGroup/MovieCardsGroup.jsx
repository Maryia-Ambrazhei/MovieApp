import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieCardsGroup.css';

const MovieCardsGroup = ({ movies }) => {
  const searchResults = movies.results;
  console.log(searchResults);
  return (
    <div className="results-section">
      <div className="movie-cards-group">
        {movies.results.map(movie => (
          <MovieCard title={movie.title} year={movie.year} imageURL={movie.image.url} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsGroup;
