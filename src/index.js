import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme/theme'
import App from './components/App'

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
)
