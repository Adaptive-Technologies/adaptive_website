import React from 'react';
import { CardMedia, Box } from '@material-ui/core';
import navbarStyles from '../theme/navbar';
import Adaptive_logo from '../assets/images/Adaptive_logo_WHITE_PINK.png';
import CustomButton from './CustomButton';

const Navbar = () => {
  const tabsLeft = [
    {
      name: 'home',
      label: 'home',
    },
    {
      name: 'our-approach',
      label: 'our approach',
    },
    {
      name: 'technologies',
      label: 'technologies',
    },
  ];
  const tabsRight = [
    {
      name: 'about',
      label: 'about',
    },
    {
      name: 'contact-us',
      label: 'contact us',
    },
  ];

  const tabListLeft = tabsLeft.map((tab) => {
    const data = {};
    data.name = tab.name;
    data.label = tab.label;
    return <CustomButton name={data.name} label={data.label} />;
  });
  const tabListRight = tabsRight.map((tab) => {
    const data = {};
    data.name = tab.name;
    data.label = tab.label;
    return <CustomButton name={data.name} label={data.label} />;
  });
  const classes = navbarStyles();
  return (
    <>
      <Box data-cy="navbar" className={classes.container}>
        <Box className={classes.textBox}>{tabListLeft}</Box>
        <CardMedia
          className={classes.image}
          component="img"
          image={Adaptive_logo}
          data-cy='adaptive-logo'
        />
        <Box className={classes.textBox}>{tabListRight}</Box>
      </Box>
    </>
  );
};

export default Navbar;
