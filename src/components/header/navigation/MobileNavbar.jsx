import React, { useState } from 'react'
import { Box, SwipeableDrawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Adaptive_logo from '../../../assets/images/Adaptive_logo_WHITE_PINK.png'

const MobileNavbar = ({ navigationMenu, classes }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Box data-cy='navbar' className={classes.container}>
      <img
        className={classes.logo}
        src={Adaptive_logo}
        data-cy='adaptive-logo'
        alt='The Adaptive Logo'
      />

      <SwipeableDrawer
        data-cy='navbar'
        PaperProps={{ className: classes.drawer }}
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        onClick={() => setDrawerOpen(false)}>
        {navigationMenu}
      </SwipeableDrawer>
      <IconButton
        className={classes.menuButton}
        onClick={() => setDrawerOpen(true)}>
        <MenuIcon data-cy='hamburger-menu' />
      </IconButton>
    </Box>
  )
}

export default MobileNavbar
