import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

const MovieCard = () => {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src="https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/7e1b942d-a868-46a5-9142-3c2864a6e35b/1920x"
      />
      <Card.Body className="info-section">
        <div className="info-section-column">
          <Card.Text className="movie-name">Movie Name</Card.Text>
          <Card.Text className="movie-genre">Movie Genre</Card.Text>
        </div>
        <div className="info-section-column">
          <Card.Text className="movie-year">2022</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
