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
          {'< adaptive process />'}
        </Typography>
        <Typography data-cy='body-1' variant='body2' className={classes.body}>
          Here at Adaptive Labs we work with the vision that everything is
          changing. We are here to help you adapt and develop to these changes.{' '}
          <br></br>
          Below you can read the 4 step Adaptive process
        </Typography>
      </Box>
      <CustomAccordion />
    </>
  )
}

export default OurProcess
