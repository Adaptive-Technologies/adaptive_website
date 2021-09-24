import { createTheme } from '@mui/material/styles'
import palette from './palette.theme'

const theme = createTheme({
  palette: palette,
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '24px',
          textTransform: 'uppercase',
          letterSpacing: '-0.48px',
        },
      },
    },
    MuiCardMedia: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            objectFit: 'contain',
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { special: 'gradient' },
          style: {
            background: 'linear-gradient(45deg, #4ba9ff 30%, #f84b9b 90%)',
            border: 0,
            borderRadius: 30,
            boxShadow: 'inset 0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            padding: '8px 30px',
            textTransform: 'uppercase',
          },
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '3rem',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
        },
      },
    },
    MuiGrid: {
      variants: [
        {
          props: { special: 'center' },
          style: {
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ['video', 'serif'].join(','),
    fontStyle: 'normal',
    h1: {
      fontWeight: 400,
      fontSize: '60px',
      '@media (max-width:1280px)': {
        fontSize: '48px',
      },
      '@media (max-width:620px)': {
        fontSize: '36px',
      },
      padding: '2rem',
      textAlign: 'center',
    },
    h2: {
      fontWeight: 400,
      fontSize: '48px',
      letterSpacing: '-0.96px',
      '@media (max-width:800px)': {
        fontSize: '30px',
      },
      padding: '2rem',
      textAlign: 'center',
      textTransform: 'uppercase',

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
      lineHeight: '30px',
      fontFamily: ['source-sans-pro', 'sans-serif'].join(','),
    },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '24px',
      '@media (max-width:1280px)': {
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
      letterSpacing: '-0.48px',
    },
  },
})

export default theme
