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
import DesktopNavbar from './navbar/DesktopNavbar'
import MobileNavbar from './navbar/MobileNavbar'

const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:1700px)')
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    setTabs(navbarHelper.buildTabs())
  }, [isMobile])

  return (
    <Box className={classes.section}>
      {isMobile ? (
        <MobileNavbar tabs={tabs}/>
      ) : (
        <DesktopNavbar tabs={tabs}/>
      )}
    </Box>
  )
}

export default Navbar
