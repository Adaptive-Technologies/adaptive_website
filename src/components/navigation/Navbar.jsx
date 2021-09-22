import React, { useState, useEffect } from 'react';
import {
  CardMedia,
  Box,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core';
import navbarStyles from '../../theme/navbar';
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png';
import navbarHelper from '../../modules/navbarHelper';

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = navbarStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    let response = navbarHelper.navigation(mobile);
    setLeft(response.tabListLeft);
    setRight(response.tabListRight);
    setMobileView(response);
  }, [mobile]);

  return (
    <>
      {mobile ? (
        <Box data-cy="navbar" className={classes.container}>
          <CardMedia
            className={classes.image}
            component="img"
            image={Adaptive_logo}
            data-cy="adaptive-logo"
          />
          <SwipeableDrawer
            anchor="top"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}>
            {mobileView}
          </SwipeableDrawer>
          <IconButton onClick={() => setDrawerOpen(true)}>
            Click here
          </IconButton>
        </Box>
      ) : (
        <Box data-cy="navbar" className={classes.container}>
          <Box className={classes.textBox}>{left}</Box>
          <CardMedia
            className={classes.image}
            component="img"
            image={Adaptive_logo}
            data-cy="adaptive-logo"
          />
          <Box className={classes.textBox}>{right}</Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
