import React, { useState, useEffect } from 'react'
import {
  CardMedia,
  Box,
  Grid,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from '../../theme/views/navbar.theme'
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png'
import navbarHelper from '../../modules/navbarHelper'
import theme from '../../theme/theme'

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    setTabs(navbarHelper.buildTabs(isMobile))
  }, [isMobile])

  return (
    <Box className={classes.section}>
      {isMobile ? (
        <Box data-cy='navbar' className={classes.container}>
          <CardMedia
            className={classes.logo}
            component='img'
            image={Adaptive_logo}
            data-cy='adaptive-logo'
            variant='contained'
          />
          <SwipeableDrawer
            PaperProps={{ className: classes.drawer }}
            anchor='right'
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}>
            {tabs}
          </SwipeableDrawer>
          <IconButton
            className={classes.menuButton}
            onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      ) : (
        <Box data-cy='navbar' className={classes.container}>
          <Grid item container lg={6} className={classes.tabsLeft}>
            {tabs.slice(0, 3)}
          </Grid>
          <Grid item container lg={1} className={classes.logoBox}>
            <CardMedia
              className={classes.logo}
              component='img'
              image={Adaptive_logo}
              data-cy='adaptive-logo'
              variant='contained'
            />
          </Grid>
          <Grid item container lg={4} className={classes.tabsRight}>
            {tabs.slice(3, 5)}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
