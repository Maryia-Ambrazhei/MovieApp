import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Header from './Header/Header.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import SearchResultsBar from './SearchResultsBar/SearchResultsBar.jsx';
import MovieCardsGroup from './MovieCardsGroup/MovieCardsGroup.jsx';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

  function handleInputValueChange(event) {
    setSearchValue(event.target.value);
  }

  const handlePaginationClick = pageNumber => {
    setPage(pageNumber);
  };

  const getMoviesList = value => {
    const APIkey = 'a5bb8f3c75b62747ed81ad005cfcb02e';
    if (value === '') {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&page=${page}`)
        .then(stream => stream.json())
        .then(movies => setMovies(movies));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${value}&page=${page}`
      )
        .then(stream => stream.json())
        .then(setMovies);
    }
  };
  useEffect(() => {
    getMoviesList(searchValue);
  }, [page]);

  return (
    <div>
      <div className="section-wrapper">
        <SearchForm onChange={handleInputValueChange} onSubmit={() => getMoviesList(searchValue)} />
      </div>
      {movies && (
        <div>
          <SearchResultsBar
            quantity={movies.total_results}
            currentPage={page}
            lastPage={movies.total_pages > 500 ? 500 : movies.total_pages}
            onPaginationClick={handlePaginationClick}
          />
          <MovieCardsGroup movies={movies.results} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
