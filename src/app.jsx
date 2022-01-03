import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import LoadingBar from './LoadingBar/LoadingBar.jsx';
import Header from './Header/Header.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import SearchResultsBar from './SearchResultsBar/SearchResultsBar.jsx';
import MovieCardsGroup from './MovieCardsGroup/MovieCardsGroup.jsx';

const App = () => {
  const [isBusy, setIsBusy] = useState([true]);
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleInputValueChange(event) {
    setInputValue(event.target.value);
  }
  function handleFormSubmit(event) {
    handleInputValueChange();
    event.preventDefault();
  }

  useEffect(async () => {
    const moviesPromise = fetch('https://imdb8.p.rapidapi.com/title/find?q=good', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '819c0550b2msh60beac618c701b6p10a38fjsn10bbd9755104',
      },
    });
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');

    Promise.all([moviesPromise, usersPromise]).then(async ([moviesStream, usersStream]) => {
      const movies = await moviesStream.json();
      const users = await usersStream.json();
      setMovies(movies);
      setIsBusy(false);
    });
  }, []);
  console.log(movies);

  return (
    <div>
      {isBusy ? (
        <LoadingBar />
      ) : (
        <div>
          <div className="wrapper">
            <Header />
            <SearchForm onClick={handleFormSubmit} />
          </div>
          <SearchResultsBar />
          <MovieCardsGroup movies={movies} />
        </div>
      )}
    </div>
  );
};

export default App;
