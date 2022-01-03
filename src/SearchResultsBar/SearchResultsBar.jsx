import React from 'react';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup.jsx';
import MoviesCounter from '../MoviesCounter/MoviesCounter.jsx';
import './SearchResultsBar.css';

const SearchResultsBar = () => (
  <div className="search-results-bar">
    <MoviesCounter />
    <div className="search-results-options">
      <p className="search-section-text">Sort by</p>
      <ButtonsGroup firstButton="Release Date" secondButton="Rating" />
    </div>
  </div>
);

export default SearchResultsBar;
