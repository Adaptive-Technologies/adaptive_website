import React from 'react'
import { Box } from '@mui/material'

import useStyles from '../theme/views/body.theme'
import Navbar from '../components/navigation/Navbar'
import Hero from './Hero'
import OurProcess from './our_process/OurProcess'
import ClientsSection from './our_clients/ClientsSection'
import Technologies from './Technologies'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />
        <Hero />
        <OurProcess />
        <ClientsSection />
        <Technologies />
      </Box>
    </>
  )
}

export default App
