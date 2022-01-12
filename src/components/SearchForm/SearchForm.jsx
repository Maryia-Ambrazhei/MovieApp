import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchForm.css';

const SearchForm = ({ onChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <div className="search-section">
      <Form onSubmit={handleSubmit}>
        <div className="search-section-row">
          <Form.Control
            size="lg"
            type="text"
            placeholder="type something here"
            onChange={onChange}
            className="form-input"
          />
        </div>
        <div className="search-section-row">
          <Button variant="danger" type="submit" className="search-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
