import React from 'react'
import { Box } from '@mui/material'
import Adaptive_logo from 'assets/images/Adaptive_logo_WHITE_PINK.png'
import useStyles from 'theme/views/header.theme'
import Drawer from './Drawer'

const MobileNavbar = ({ children }) => {
  const classes = useStyles()

  return (
    <Box data-cy='navbar' className={classes.container}>
      <img
        className={classes.logo}
        src={Adaptive_logo}
        data-cy='adaptive-logo'
        alt='The Adaptive Logo'
      />
      <Drawer>{children}</Drawer>
    </Box>
  )
}

export default MobileNavbar
