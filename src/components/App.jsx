import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import useStyles from '../theme/views/body.theme'
import Header from './header/Header'
import tabs from '../assets/data/tabData'
import Hero from './hero/Hero'
import OurProcess from './our_process/OurProcess'
import CraftAcademy from './CraftAcademy'
import ClientsSection from './our_clients/ClientsSection'
import Technologies from './Technologies'
import AboutUs from './AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from './footer/Footer'

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <Box className={classes.body}>
        <Header />
        <Hero id={tabs[0].name} />
        <OurProcess id={tabs[1].name} />
        <CraftAcademy id={tabs[2].name} />
        <ClientsSection />
        <Technologies id={tabs[3].name} />
        <Box className={classes.backgroundGradient}>
          <AboutUs id={tabs[4].name} />
          <ContactUs id={tabs[5].name} />
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
