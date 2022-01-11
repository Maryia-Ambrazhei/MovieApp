import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import notFound from '../styles/notfound.jpg';

const MovieCard = ({ title, year, imagePATH, movieId }) => {
  let imageURL = '';
  if (imagePATH) {
    imageURL = `https://image.tmdb.org/t/p/w500/${imagePATH}`;
  } else {
    imageURL = notFound;
  }

  return (
    <Card className="movie-card">
      <Link className="movie-details-link" to={`/movieDetails/${movieId}`}>
        <Card.Img variant="top" className="movie-poster-main" src={imageURL} />
      </Link>
      <Card.Body className="info-section">
        <Link className="info-section-column movie-details-link" to={`/movieDetails/${movieId}`}>
          <Card.Text className="movie-name">
            {title} ({year})
          </Card.Text>
        </Link>
        <div className="info-section-column">
          <i className="fas fa-heart save-icon"></i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
