import React, { useState, useEffect } from 'react';
import {
  CardMedia,
  Box,
  Grid,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  Container,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import navbarStyles from '../../theme/navbar';
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png';
import navbarHelper from '../../modules/navbarHelper';

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:1280px)');
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
        <Box className={classes.headerContainer}>
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
              <Menu />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box className={classes.headerContainer}>
          <Box data-cy="navbar" className={classes.container}>
            <Grid item container lg={5} className={classes.textBoxLeft}>
              {left}
            </Grid>
            <Grid item container lg={2} className={classes.imageBox}>
              <CardMedia
                className={classes.image}
                component="img"
                image={Adaptive_logo}
                data-cy="adaptive-logo"
              />
            </Grid>
            <Grid item container lg={5} className={classes.textBoxRight}>
              {right}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
