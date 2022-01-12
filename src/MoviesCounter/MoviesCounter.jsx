import React from 'react';
import './MoviesCounter.css';

const MoviesCounter = ({ quantity }) => (
  <div className="movies-counter">
    <span className="movies-counter-quantity">{quantity}</span>
    <span className="movies-corunter-text">movies found</span>
  </div>
);

export default MoviesCounter;
