import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

const MovieCard = ({ title, year, imagePATH, vote }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500/${imagePATH}`;
  return (
    <Card className="movie-card">
      <Card.Img variant="top" className="movie-poster" src={imageURL} />
      <Card.Body className="info-section">
        <div className="info-section-column">
          <Card.Text className="movie-name">{title}</Card.Text>
          <Card.Text className="movie-genre">{vote}</Card.Text>
        </div>
        <div className="info-section-column">
          <Card.Text className="movie-year">{year}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
