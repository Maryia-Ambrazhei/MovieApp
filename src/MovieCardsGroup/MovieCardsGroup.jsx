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
            title={movie.title}
            vote={movie.vote_average}
            year={movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
            imagePATH={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : './notfound.jpg'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsGroup;
