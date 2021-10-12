import React, { Suspense } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Box, Button, Grid, Typography } from '@mui/material'

import useStyles from '../../theme/views/hero.theme'

const Hero = ({ id }) => {
  const classes = useStyles()
  const MediumResBGVideo = React.lazy(() =>
    import('./BackgroundMediumVideo')
  )
  const SuperLowResBGVideo = React.lazy(() =>
    import('./BackgroundLowVideo')
  )

  const backgroundGradient = <Box className={classes.backgroundGradient} />

  const lowFallback = (
    <Suspense fallback={backgroundGradient}>
      <SuperLowResBGVideo />
    </Suspense>
  )

  return (
    <Box className={classes.section} id={id}>
      <Suspense fallback={lowFallback}>
        <MediumResBGVideo />
      </Suspense>

      <Grid
        container
        className={classes.overlay}
        direction='column'
        special='center'>
        <Box className={classes.overlayContent}>
          <Typography data-cy='slogan' variant='h1'>
            Adaptive Labs 
            <br></br>
            The Modern Way To Web Development
          </Typography>

          <Button
            data-cy='contact-us-btn'
            special='gradient'
            component={HashLink}
            smooth
            to='#contact-us'>
            {'{ Get in touch }'}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Hero
