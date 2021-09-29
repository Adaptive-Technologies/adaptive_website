import React from 'react'
import { Box } from '@mui/material'

import useStyles from '../theme/views/body.theme'
import Navbar from '../components/navigation/Navbar'
import ContactUs from '../components/ContactUs'
import Hero from './Hero'
import OurProcess from './our_process/OurProcess'
import ClientsSection from './our_clients/ClientsSection'
import Technologies from './Technologies'
import AboutUs from './AboutUs'
import Footer from './footer/Footer'

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
        <Box className={classes.backgroundGradient}>
        <AboutUs />
        <ContactUs />
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default App
