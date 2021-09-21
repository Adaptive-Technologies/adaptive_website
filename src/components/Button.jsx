import { Button } from '@material-ui/core';
import React from 'react';

const customButton = ({ name, variant }) => {
  return <Button variant={variant}>{name}</Button>;
};

export default customButton;
