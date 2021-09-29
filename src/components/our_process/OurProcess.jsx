import React from 'react'
import { Box, Typography } from '@mui/material'
import useStyles from '../../theme/views/our_process/process.theme'
import CustomAccordion from './CustomAccordion'

const OurProcess = ({ id }) => {
  const classes = useStyles()
  return (
    <>
      <Box data-cy='step-0' className={classes.box} id={id}>
        <Typography
          data-cy='our-process'
          variant='h2'
          className={classes.header}>
          {'< our process />'}
        </Typography>
        <Typography data-cy='body-1' variant='body2' className={classes.body}>
          Here at Adaptive Labs Nordics we work with the vision that everything
          is changing and we are here to help you adapt to these changes.
        </Typography>
        <Typography data-cy='body-2' variant='body2' className={classes.body}>
          Below you can read about our 4 step plan in our process
        </Typography>
      </Box>
      <CustomAccordion />
    </>
  )
}

export default OurProcess
