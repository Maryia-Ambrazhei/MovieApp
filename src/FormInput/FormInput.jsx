/* eslint-disable semi */
import React from 'react';
import Form from 'react-bootstrap/Form';
import './FormInput.css';

const FormInput = ({ onChange, value }) => (
  <Form>
    <Form.Control
      className="form-input"
      size="lg"
      type="text"
      placeholder="type something here"
      value={value}
      onChange={onChange}
    />
  </Form>
);

export default FormInput;
