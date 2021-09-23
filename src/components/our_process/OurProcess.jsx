import React from 'react'
import { Box, Typography } from '@mui/material'
import useStyles from '../../theme/views/process.theme'

const OurProcess = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Typography variant='h2' className={classes.header}>{'< Our Process />'}</Typography>
      <Typography variant='body2' className={classes.body}>
        Here at Adaptive Labs Nordics we work with the vision that everything is
        changing and we are here to help you adapt to these changes.
      </Typography>
      <Typography variant='body2' className={classes.body}>
        Below you can read about our 4 step plan in our process
      </Typography>
    </Box>
  )
}

export default OurProcess
