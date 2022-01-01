import React from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import SearchButton from '../SearchButton/SearchButton.jsx';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup.jsx';
import './SearchForm.css';

const SearchForm = () => (
  <div className="search-section">
    <FormInput />
    <SearchButton />
    <ButtonsGroup />
  </div>
);

export default SearchForm;
