import React from 'react';
import SearchForm from './SearchForm/SearchForm.jsx';
import Header from './Header/Header.jsx';
import MovieCardsGroup from './MovieCardsGroup/MovieCardsGroup.jsx';

const App = () => (
  <div className="wrapper">
    <Header />
    <SearchForm />

    <MovieCardsGroup />
  </div>
);

export default App;
