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
import useStyles from '../../theme/navbar'
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
        <Box className={classes.headerSection}>
          <Box data-cy='navbar' className={classes.container}>
            <CardMedia
              className={classes.image}
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
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Menu />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box className={classes.headerSection}>
          <Box data-cy='navbar' className={classes.container}>
            <Grid item container lg={5} className={classes.textBoxLeft}>
              {tabs?.leftTabs}
            </Grid>
            <Grid item container lg={2} className={classes.imageBox}>
              <CardMedia
                className={classes.image}
                component='img'
                image={Adaptive_logo}
                data-cy='adaptive-logo'
              />
            </Grid>
            <Grid item container lg={5} className={classes.textBoxRight}>
              {tabs?.rightTabs}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Navbar
