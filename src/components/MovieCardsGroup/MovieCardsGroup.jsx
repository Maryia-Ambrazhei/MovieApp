import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieCardsGroup.css';
import notFound from '../../styles/notfound.jpg';
import useWatchList from '../../hooks/useWatchList.jsx';

const MovieCardsGroup = ({ movies }) => {
  const { checkIfInWatchList, removeFromWatchList, addToWatchList } = useWatchList();

  const toggleWatchList = (movie) => {
    if (checkIfInWatchList(movie.movieId)) {
      removeFromWatchList(movie);
    } else {
      addToWatchList(movie);
    }
  };

  return (
    <div className="results-section">
      <div className="movie-cards-group">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            year={movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
            imageURL={
              movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : notFound
            }
            toggleWatchList={toggleWatchList}
            isInWatchList={checkIfInWatchList(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsGroup;
