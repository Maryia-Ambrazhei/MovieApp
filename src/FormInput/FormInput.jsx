/* eslint-disable semi */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './FormInput.css';

const FormInput = ({ onChange, onClick, value }) => (
  <Form className="form-input">
    <Form.Control
      size="lg"
      type="text"
      placeholder="type something here"
      value={value}
      onChange={onChange}
    />
    <Button variant="danger" onClick={onClick}>
      Search
    </Button>
  </Form>
);

export default FormInput;
