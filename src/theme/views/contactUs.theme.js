import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '50px 0',
    width: '98vw',
  },
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
  },
  container: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      paddingTop: '20px',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },

  containerGetInTouch: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      margin: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '10px',
    },
  },

  contactUsSubHeader: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      paddingTop: '30px',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '2rem',
    },
  },

  text: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      padding: '2rem',
      maxWidth: '95vw',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '0px',
      paddingBottom: '2rem',
      maxWidth: '100%',
    },
  },
  contactData: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    maxWidth: '99vw',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2rem',
  },
  formHeader: {
    paddingBottom: '20px',
    paddingTop: '40px',
  },
  formContainer: {
    [theme.breakpoints.up('xs')]: {
      padding: '100px 10px 50px 10px',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      padding: ' 0px 0px 30px 0px',
    },
  },
  buttonForm: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
  },
}))

export default useStyles
