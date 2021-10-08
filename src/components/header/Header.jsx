import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import DesktopNavbar from './navigation/DesktopNavbar'
import MobileNavbar from './navigation/MobileNavbar'
import NavTab from './navigation/NavTab'
import buildNavigationMenu from '../../modules/buildNavigationMenu'
import tabData from '../../assets/data/tabData'
import useStyles from '../../theme/views/header.theme'

const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:1700px)')
  const navigationMenu = buildNavigationMenu(tabData, NavTab)

  return (
    <Box className={classes.section}>
      {isMobile ? (
        <MobileNavbar navigationMenu={navigationMenu} classes={classes} />
      ) : (
        <DesktopNavbar navigationMenu={navigationMenu} classes={classes} />
      )}
    </Box>
  )
}

export default Navbar
