import React from 'react'
import { Box, Button } from '@mui/material'
import Navbar from '../components/navigation/Navbar'
import useStyles from '../theme/views/body.theme'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />
        <Button variant="contained" special='gradiant' >borgit</Button>
      </Box>
    </>
  )
}

export default App
