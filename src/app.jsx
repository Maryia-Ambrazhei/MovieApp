import React from 'react';
import FormInput from './FormInput/FormInput.jsx';
import SearchButton from './SearchButton/SearchButton.jsx';
import Header from './Header/Header.jsx';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="search-section">
      <FormInput />
      <SearchButton />
    </div>
    <div className="results-section"></div>
  </div>
);

export default App;
