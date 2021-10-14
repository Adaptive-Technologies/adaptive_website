import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import DesktopNavbar from './navigation/DesktopNavbar'
import MobileNavbar from './navigation/MobileNavbar'
import NavTab from './navigation/NavTab'
import buildNavigationTabs from 'modules/buildNavigationTabs'
import tabData from 'assets/data/tabData'
import useStyles from 'theme/views/header.theme'

const Navbar = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:1700px)')
  const navTabs = buildNavigationTabs(tabData, NavTab)

  return (
    <Box className={classes.section}>
      {isDesktop ? (
        <DesktopNavbar>{navTabs}</DesktopNavbar>
      ) : (
        <MobileNavbar>{navTabs}</MobileNavbar>
      )}
    </Box>
  )
}

export default Navbar
