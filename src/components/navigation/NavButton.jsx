import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import navbarStyles from '../../theme/navbar';

const NavButton = ({ name, label }) => {
  const classes = navbarStyles();

  return (
    <Tabs value={false}>
      <Tab className={classes.button} data-cy={name} label={`< ${label}  />`} />
    </Tabs>
  );
};

export default NavButton;
