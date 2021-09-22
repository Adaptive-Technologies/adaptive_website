import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import navbarStyles from '../../theme/navbar';

const NavButton = ({ name, label }) => {
  const classes = navbarStyles();

  return (
    <Tabs className={classes.button} value={false}>
      <Tab data-cy={name} label={`< ${label}  />`} />
    </Tabs>
  );
};

export default NavButton;
