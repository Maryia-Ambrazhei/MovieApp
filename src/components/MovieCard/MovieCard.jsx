import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import SaveIcon from '../SaveIcon/SaveIcon.jsx';

const MovieCard = ({ title, year, imageURL, movieId, isInWatchList, toggleWatchList }) => (
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
        <SaveIcon
          isInWatchList={isInWatchList ? 'to-watch' : 'not-to-watch'}
          onToggle={() => toggleWatchList({ title, movieId, imageURL, year })}
        />
      </div>
    </Card.Body>
  </Card>
);

export default MovieCard;
