import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import './ButtonsGroup.css';

const ButtonsGroup = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="danger">Left</Button>
      <Button variant="danger">Middle</Button>
    </ButtonGroup>
  );
};

export default ButtonsGroup;
