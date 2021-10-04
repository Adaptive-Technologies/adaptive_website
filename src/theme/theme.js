import { createTheme } from '@mui/material/styles'
import palette from './palette.theme'

const theme = createTheme({
  palette: palette,

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '1rem 0',
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        minRows: 4,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFD9F3',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#A581DD',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#FFD9F3',
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
          color: '#FFD9F3',
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1919,
      uwhd: 2500,
      kkkk: 3330,
    },
  },
  typography: {
    fontFamily: ['Sarpanch', 'sans-serif'].join(','),
    fontStyle: 'normal',
    h1: {
      fontWeight: 400,
      fontSize: '60px',
      color: '#FFD9F3',
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
      fontSize: '40px',
      color: '#FFD9F3',
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
      color: '#FFD9F3',
      '@media (max-width:800px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: '24px',
      color: '#FFD9F3',
      '@media (max-width:800px)': {
        fontSize: '20px',
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: '18px',
      color: '#FFD9F3',
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    },
    techName: {
      fontWeight: 400,
      fontSize: '24px',
      padding: '1rem',
      fontFamily: ['Sarpanch', 'sans-serif'].join(','),
    },
    occupation: {
      fontWeight: 300,
      fontSize: '18px',
      color: '#FFD9F3',
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.3rem',
      color: '#FFD9F3',
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    },
    body2: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '30px',
      color: '#FFD9F3',
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    },
    button: {
      fontWeight: 400,
      fontSize: '24px',
      '@media (max-width:1280px)': {
        fontSize: '18px',
      },
    },
    sendMsgButton: {
      fontWeight: 400,
      fontSize: '24px',
      '@media (min-width:600px)': {
        fontSize: '18px',
      },
    },
    Tabs: {
      fontWeight: 400,
      fontSize: '24px',
      color: '#FFD9F3',
      letterSpacing: '-0.48px',
    },
  },
})

export default theme
