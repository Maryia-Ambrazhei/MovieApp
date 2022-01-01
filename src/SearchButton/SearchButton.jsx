import React from 'react';
import Button from 'react-bootstrap/Button';
import './SearchButton.css';

const SearchButton = ({ onClick }) => {
  return (
    <Button className="search-button" variant="danger" onClick={onClick}>
      Search
    </Button>
  );
};

export default SearchButton;
