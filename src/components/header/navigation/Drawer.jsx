import React, { useState } from 'react'
import { SwipeableDrawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from '../../../theme/views/header.theme'

const Drawer = ({ children }) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <SwipeableDrawer
        data-cy='navbar'
        PaperProps={{ className: classes.drawer }}
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        onClick={() => setDrawerOpen(false)}
        children={children}
      />
      <IconButton
        className={classes.menuButton}
        onClick={() => setDrawerOpen(true)}>
        <MenuIcon data-cy='hamburger-menu' />
      </IconButton>
    </>
  )
}

export default Drawer
