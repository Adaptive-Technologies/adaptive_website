import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import theme from '../src/theme/theme'
import App from './components/App'

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme} />
    <CssBaseline />
    <App />
    <ThemeProvider />
  </React.Fragment>,
  document.getElementById('root')
)
