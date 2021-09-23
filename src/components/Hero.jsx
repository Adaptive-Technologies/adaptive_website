import React from 'react'
import ReactPlayer from 'react-player'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import heroVideo from '../assets/videos/HeroWatermarkedCompressed.mp4'

const useStyles = makeStyles(() => ({
  section: {
    position: 'relative',
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <Box className={classes.section}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <Box className={classes.overlay} component='div'>
        <Typography>Slogan</Typography>
        <Button>Contact</Button>
      </Box>
    </Box>
  )
}

export default Hero
