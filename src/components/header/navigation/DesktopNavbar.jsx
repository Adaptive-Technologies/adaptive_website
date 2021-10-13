import React from 'react'
import { CardMedia, Box, Grid } from '@mui/material'
import Adaptive_logo from 'assets/images/Adaptive_logo_WHITE_PINK.png'
import useStyles from 'theme/views/header.theme'

const DesktopNavbar = ({ children }) => {
  const classes = useStyles()

  return (
    <Box data-cy='navbar' className={classes.container}>
      <Grid item container lg={5} className={classes.tabsLeft}>
        {children.slice(0, 3)}
      </Grid>
      <Grid item container lg={2} className={classes.logoBox}>
        <CardMedia
          className={classes.logo}
          component='img'
          image={Adaptive_logo}
          data-cy='adaptive-logo'
          variant='contained'
        />
      </Grid>
      <Grid item container lg={5} className={classes.tabsRight}>
        {children.slice(3, 6)}
      </Grid>
    </Box>
  )
}

export default DesktopNavbar
