import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import navbarStyles from '../theme/navbar';

const CustomButton = ({ name, label, index }) => {
  const classes = navbarStyles();
  return (
    <Tabs className={classes.button}>
      <Tab data-cy={name} label={`< ${label} />`} value={index} />
    </Tabs>
  );
};

export default CustomButton;
