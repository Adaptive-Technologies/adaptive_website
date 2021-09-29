import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  backgroundGradient: {
    width: '100%',
    height: '100%',
    background:
      'transparent linear-gradient(165deg, #250022 0%, #250022 14%, #F84B9B 37%, #A581DD 51%, #6588E2 63%, #2B6BA7 72%, #250022 88%, #000000 100%) 0% 0% no-repeat padding-box',
    paddingBottom: '200px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '400px',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingBottom: '500px',
    },
    [theme.breakpoints.up('kkkk')]: {
      paddingBottom: '600px',
    },
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
      padding: '20px',
    },
  },

  contactUsHeader: {
    [theme.breakpoints.up('xs')]: {
      paddingTop: '30px',
      justifyContent: 'center',
    },
  },

  text: {
    [theme.breakpoints.up('xs')]: {
      paddingTop: '20px',
      paddingBottom: '50px',
      maxWidth: '95%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '0px',
      paddingBottom: '0px',
      maxWidth: '100%',
    },
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
