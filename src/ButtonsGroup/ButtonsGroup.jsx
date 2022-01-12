import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import './ButtonsGroup.css';

const ButtonsGroup = ({ firstButton, secondButton }) => (
  <ButtonGroup>
    <Button variant="danger">{firstButton}</Button>
    <Button variant="danger">{secondButton}</Button>
  </ButtonGroup>
);

export default ButtonsGroup;
