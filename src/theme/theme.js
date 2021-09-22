import { createTheme } from '@mui/material/styles'
import palette from './palette.theme'

const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: ['video', 'serif'].join(','),
    fontStyle: 'normal',
    h1: {
      fontWeight: 400,
      fontSize: '60px',
      '@media (max-width:800px)': {
        fontSize: '36px',
      },
    },
    h2: {
      fontWeight: 400,
      fontSize: '48px',
      '@media (max-width:800px)': {
        fontSize: '30px',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '30px',
      '@media (max-width:800px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: '24px',
      '@media (max-width:800px)': {
        fontSize: '20px',
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: '18px',
      fontFamily: ['source-sans-pro', 'sans-serif'].join(','),
    },
    techName: {
      fontWeight: 400,
      fontSize: '24px',
    },
    occupation: {
      fontWeight: 300,
      fontSize: '18px',
      fontFamily: ['source-sans-pro', 'sans-serif'].join(','),
    },
    body1: {
      fontWeight: 400,
      fontSize: '24px',
      fontFamily: ['source-sans-pro', 'sans-serif'].join(','),
    },
    body2: {
      fontWeight: 400,
      fontSize: '18px',
      fontFamily: ['source-sans-pro', 'sans-serif'].join(','),
    },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '36px',
      '@media (min-width:600px)': {
        fontSize: '18px',
      },
    },
    sendMsgButton: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '24px',
      '@media (min-width:600px)': {
        fontSize: '18px',
      },
    },
    Tabs: {
      fontWeight: 400,
      fontSize: '24px',
    },
  },
})

export default theme
