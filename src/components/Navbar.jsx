import React from 'react';
import { CardMedia, Box } from '@material-ui/core';
import navbarStyles from '../theme/navbar';
import Adaptive_logo from '../assets/images/Adaptive_logo_WHITE_PINK.png';
import CustomButton from './CustomButton';

const Navbar = () => {
  const tabsLeft = [
    '< Home />',
    '< Our Approach />',
    '< Technologies />',
  ]

  const tabsRight = [
    '< About />',
    '< Contact Us />',
  ]

  const tabListLeft = tabsLeft.map((tab) => {
    return <CustomButton name={tab} />;
  });
  const tabListRight = tabsRight.map((tab) => {
    return <CustomButton name={tab} />;
  });
  const classes = navbarStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.textBox}>{tabListLeft}</Box>
        <CardMedia
          className={classes.image}
          component="img"
          image={Adaptive_logo}
        />
        <Box className={classes.textBox}>{tabListRight}</Box>
      </Box>
    </>
  );
};

export default Navbar;
