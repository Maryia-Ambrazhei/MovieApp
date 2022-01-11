import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieCardsGroup.css';

const MovieCardsGroup = ({ movies }) => {
  return (
    <div className="results-section">
      <div className="movie-cards-group">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            year={movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
            imagePATH={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsGroup;
