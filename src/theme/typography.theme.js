export default typography = {
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
}
