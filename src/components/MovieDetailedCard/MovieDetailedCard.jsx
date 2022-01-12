import React from 'react';
import './MovieDetailedCard.css';
import notFound from '../../styles/notfound.jpg';

const MovieDetailedCard = ({ movie }) => {
  const releaseYear = movie.release_date.slice(0, 4);
  const movieVote = movie.vote_average.toFixed(1);
  let imageURL = '';
  if (movie.poster_path) {
    imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  } else {
    imageURL = notFound;
  }
  return (
    <div className="movie-detailed-wrapper">
      <div className="movie-detailed-card">
        <div className="movie-detailed-column">
          <img variant="top" className="movie-poster" src={imageURL} />
        </div>
        <div className="movie-detailed-column">
          <div className="movie-detailed-main">
            <span className="movie-vote">
              <i className="fas fa-star movie-vote-star"></i> {movieVote}
            </span>
            <h3 className="movie-title">
              {movie.title} ({releaseYear})
            </h3>
          </div>
          <div className="movie-detailed-about">
            <span className="movie-detailed-title">Overview</span>
            <span className="movie-overview">{movie.overview}</span>
            <span className="movie-detailed-title">Genres</span>
            <div className="movie-genres-wrapper">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="movie-genre">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailedCard;
