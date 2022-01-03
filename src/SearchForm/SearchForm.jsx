import React from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import SearchButton from '../SearchButton/SearchButton.jsx';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup.jsx';
import './SearchForm.css';

const SearchForm = ({ onChange, onClick, value }) => (
  <div className="search-section">
    <div className="search-section-row">
      <FormInput value={value} onChange={onChange} onClick={onClick} />
    </div>
    <div className="search-section-row">
      <div className="search-section-options">
        <p className="search-section-text">Search by</p>
        <ButtonsGroup firstButton="Title" secondButton="Genre" />
      </div>
      <SearchButton onClick={onClick} />
    </div>
  </div>
);

export default SearchForm;
