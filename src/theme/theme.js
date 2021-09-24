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
          color: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#fff',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '24px',
          textTransform: 'uppercase',
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
            height: 48,
            padding: '0 30px',
            textTransform: 'uppercase',
            width: '80%',
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
      fontSize: '36px',
      '@media (min-width:600px)': {
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
    },
  },
})

export default theme
