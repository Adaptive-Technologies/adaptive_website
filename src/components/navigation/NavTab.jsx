import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

const NavTab = ({ name, label, index }) => {
  return (
    <Tabs>
      <Tab data-cy={name} label={`< ${label} />`} />
    </Tabs>
  );
};

export default NavTab;
