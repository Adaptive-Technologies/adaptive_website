import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: '70px 0',
    backgroundColor: '#4093E5',
    display: 'flex',
  },
  header: {
    textAlign: 'center',
  },
  subHeader: {
    textAlign: 'center',
    paddingBottom: '2rem',
  },
  description: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      paddingBottom: '1rem',
    },
  },
  logo: {
    display: 'flex',
    alignSelf: 'center',
    margin: '5rem auto 5rem auto',
  },
  button: {
    display: 'flex',
    marginBottom: '2rem',
  },
}))

export default useStyles
