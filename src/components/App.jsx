import React from 'react'
import { Box } from '@mui/material'
import useStyles from '../theme/views/body.theme'
import Navbar from '../components/navigation/Navbar'
import ContactUs from '../components/ContactUs'
import Hero from './Hero'
import OurProcess from './our_process/OurProcess'
import ClientsSection from './our_clients/ClientsSection'
import Technologies from './Technologies'
import tabs from '../assets/data/tabs'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <Box className={classes.body}>
        <Navbar />
        <Hero id={tabs[0].name}/>
        <OurProcess id={tabs[1].name}/>
        <ClientsSection />
        <Technologies id={tabs[2].name}/>
        <ContactUs id={tabs[4].name} />
      </Box>
    </Router>
  )
}

export default App
