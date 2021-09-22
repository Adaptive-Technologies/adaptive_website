import { createTheme } from '@material-ui/core/styles';
import palette from './pallete.theme';

const theme = createTheme({
  palette: palette,

  typography: {
    fontFamily: ['video', 'source-sans-pro'].join(','),
    h1: {
      fontStyle: 'regular',
      fontWeight: 400,
    },
    h2: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '2.4rem',
    },
    h3: {
      fontStyle: 'semi-bold',
      fontWeight: 600,
    },
    h4: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h5: {
      fontStyle: 'light',
      fontWeight: 300,
    },
    h6: {
      fontStyle: 'semiBold',
      fontWeight: 600,
    },
    body1: {
      fontStyle: 'regular',
      fontWeight: 400,
      fontSize: '18px',
    },
    body2: {
      fontStyle: 'semiBold',
      fontWeight: 600,
      fontSize: '18px',
    },
    button: {
      fontStyle: 'regular',
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '18px',
    },
    caption: {
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: '18px',
    },
    overline: {
      fontStyle: 'light',
      fontWeight: 300,
      fontSize: '14px',
    },
  },
});

export default theme;
