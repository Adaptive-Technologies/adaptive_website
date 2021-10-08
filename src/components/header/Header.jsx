import React, { useState, useEffect } from 'react'
import {
  Box,
  useMediaQuery,
} from '@mui/material'
import useStyles from '../../theme/views/navbar.theme'
import buildNavigationMenu from '../../modules/buildNavigationMenu'
import DesktopNavbar from './navigation/DesktopNavbar'
import MobileNavbar from './navigation/MobileNavbar'
import NavTab from './navigation/NavTab'
import tabsData from '../../assets/data/tabsData'

const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:1700px)')
  const [tabs, setTabs] = useState([])  
  
  useEffect(() => {
    setTabs(buildNavigationMenu(tabsData, NavTab))
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
