import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navigation/Navbar'
import useStyles from '../theme/views/body.theme'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />


        <ContactUs />
      </Box>
    </>
  )
}

export default App
