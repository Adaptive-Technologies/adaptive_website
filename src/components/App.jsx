import React from 'react'
import { Box } from '@material-ui/core'
import Navbar from '../components/navigation/Navbar'
import useStyles from '../theme/body.theme'

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.body}>
        <Navbar />
      </Box>
    </>
  )
}

export default App
