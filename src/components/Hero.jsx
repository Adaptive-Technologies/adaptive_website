import React, { Suspense } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import useStyles from '../theme/views/hero.theme'
import { HashLink } from 'react-router-hash-link'

const Hero = ({ id }) => {
  const classes = useStyles()
  const BackgroundHighVideo = React.lazy(() => import('./hero/BackgroundHighVideo'))
  const MediumResBGVideo = React.lazy(() => import('./hero/BackgroundMediumVideo'))
  const SuperLowResBGVideo = React.lazy(() => import('./hero/BackgroundLowVideo'))

  const backgroundGradient = <Box className={classes.backgroundGradient} />

  const lowFallback = (
    <Suspense fallback={backgroundGradient}>
      <SuperLowResBGVideo />
    </Suspense>
  )

  const mediumFallback = (
    <Suspense fallback={lowFallback}>
      <MediumResBGVideo />
    </Suspense>
  )

  return (
    <Box className={classes.section} id={id}>
      <Suspense fallback={mediumFallback}>
        <BackgroundHighVideo />
      </Suspense>

      <Grid
        container
        className={classes.overlay}
        direction='column'
        special='center'>
        <Typography data-cy='slogan' variant='h1'>
          Digital transformation is a game changer
        </Typography>
        <Button
          data-cy='contact-us-btn'
          special='gradient'
          component={HashLink}
          smooth
          to='#contact-us'>
          {'{ Adapt your business }'}
        </Button>
      </Grid>
    </Box>
  )
}

export default Hero
