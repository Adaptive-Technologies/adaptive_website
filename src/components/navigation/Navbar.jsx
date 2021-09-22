import React, { useState, useEffect } from 'react'
import {
  CardMedia,
  Box,
  Grid,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import useStyles from '../../theme/navbar.theme'
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png'
import navbarHelper from '../../modules/navbarHelper'

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:1280px)')
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tabs, setTabs] = useState()

  useEffect(() => {
    setTabs(navbarHelper.getTabs(mobile))
  }, [mobile])

  return (
    <>
      {mobile ? (
        <Box className={classes.section}>
          <Box data-cy='navbar' className={classes.container}>
            <CardMedia
              className={classes.logo}
              component='img'
              image={Adaptive_logo}
              data-cy='adaptive-logo'
            />
            <SwipeableDrawer
              anchor='top'
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              onOpen={() => setDrawerOpen(true)}>
              {tabs}
            </SwipeableDrawer>
            <IconButton className={classes.menuButton} onClick={() => setDrawerOpen(true)}>
              <Menu />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box className={classes.section}>
          <Box data-cy='navbar' className={classes.container}>
            <Grid item container lg={5} className={classes.tabsLeft}>
              {tabs?.leftTabs}
            </Grid>
            <Grid item container lg={2} className={classes.logoBox}>
              <CardMedia
                className={classes.logo}
                component='img'
                image={Adaptive_logo}
                data-cy='adaptive-logo'
              />
            </Grid>
            <Grid item container lg={5} className={classes.tabsRight}>
              {tabs?.rightTabs}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Navbar
