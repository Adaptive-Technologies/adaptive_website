import React, { Suspense } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import useStyles from '../theme/views/hero.theme'

const Hero = ({id}) => {
  const classes = useStyles()
  const BackgroundVideo = React.lazy(() => import('./hero/BackgroundVideo'))
  const BackgroundImage = React.lazy(() => import('./hero/BackgroundImage'))

  const backgroundGradient = <Box className={classes.backgroundGradient} />

  const backgroundImage = (
    <Suspense fallback={backgroundGradient}>
      <BackgroundImage />
    </Suspense>
  )

  return (
    <Box className={classes.section} id={id}>
      <Suspense fallback={backgroundImage}>
        <BackgroundVideo />
      </Suspense>

      <Grid
        container
        className={classes.overlay}
        direction='column'
        special='center'>
        <Typography data-cy='slogan' variant='h1'>
          Adaptive labs adapts your business to the future
        </Typography>
        <Button data-cy='contact-us-btn' special='gradient'>
          {'{ Adapt your business }'}
        </Button>
      </Grid>
    </Box>
  )
}

export default Hero
