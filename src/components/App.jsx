import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navigation/Navbar'
import useStyles from '../theme/views/body.theme'
import OurProcess from './our_process/OurProcess'
import Hero from './Hero'
import ClientsSection from './our_clients/ClientsSection'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />
        <Hero />
        <OurProcess />
        <ClientsSection />
      </Box>
    </>
  )
}

export default App
