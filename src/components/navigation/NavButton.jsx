import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import navbarStyles from '../../theme/navbar';

const NavButton = ({ name, label, index }) => {
  const classes = navbarStyles();
  const [updateValue, setUpdateValue] = useState(1);

  const handleChange = (event, newValue) => {
    debugger;
    setUpdateValue(newValue);
  };

  return (
    <Tabs
      className={classes.button}
      value={updateValue}
      onChange={handleChange}>
      <Tab data-cy={name} label={`< ${label}  />`} value={index} />
    </Tabs>
  );
};

export default NavButton;
