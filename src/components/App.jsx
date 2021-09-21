import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../components/navigation/Navbar';
import pageTheme from '../theme/pageTheme';

const App = () => {
  const classes = pageTheme();
  return (
    <>
      <Box className={classes.pageContainer}>
        <Navbar />
      </Box>
    </>
  );
};

export default App;
