import React from 'react';
import MoviesCounter from '../MoviesCounter/MoviesCounter.jsx';
import MoviesPagination from '../MoviesPagination/MoviesPagination.jsx';
import './SearchResultsBar.css';

const SearchResultsBar = ({ quantity, currentPage, lastPage, onPaginationClick }) => (
  <div className="search-results-bar">
    <MoviesCounter quantity={quantity} />
    <div className="pagination-wrapper">
      <MoviesPagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPaginationClick={onPaginationClick}
      />
    </div>
  </div>
);

export default SearchResultsBar;
