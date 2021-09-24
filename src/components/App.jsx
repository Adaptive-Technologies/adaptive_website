import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navigation/Navbar'
import useStyles from '../theme/views/body.theme'
import Hero from './Hero'
import Technologies from './Technologies'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />
        <Hero />
        <Technologies/>
      </Box>
    </>
  )
}

export default App
