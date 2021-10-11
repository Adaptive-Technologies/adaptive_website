const components = {
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
}

export default components
