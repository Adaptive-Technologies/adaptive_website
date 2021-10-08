import React from 'react'
import {
  Box,
  useMediaQuery,
} from '@mui/material'
import useStyles from '../../theme/views/navbar.theme'
import buildNavigationMenu from '../../modules/buildNavigationMenu'
import DesktopNavbar from './navigation/DesktopNavbar'
import MobileNavbar from './navigation/MobileNavbar'
import NavTab from './navigation/NavTab'
import tabData from '../../assets/data/tabData'

const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:1700px)')
  const navigationMenu = buildNavigationMenu(tabData, NavTab)

  return (
    <Box className={classes.section}>
      {isMobile ? (
        <MobileNavbar navigationMenu={navigationMenu}/>
      ) : (
        <DesktopNavbar navigationMenu={navigationMenu}/>
      )}
    </Box>
  )
}

export default Navbar
