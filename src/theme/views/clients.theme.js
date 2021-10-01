import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  clientsSection: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '700px',
  },
  background: {
    [theme.breakpoints.up('lg')]: {
      maxHeight: '800px',
    },
  },
  contentBox: {
    position: 'absolute',
    flexDirection: 'column',
    marginTop: '15%',
    [theme.breakpoints.up('md')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '5%',
    },
  },
  grid: {
    marginTop: '20%',
    [theme.breakpoints.up('md')]: {
      marginTop: '10%',
    },
  },
  gridItem: {
    paddingBottom: '50px',
  },
  logo: {
    maxHeight: '95px',
    maxWidth: '75px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxHeight: '120px',
      maxWidth: '100px',
      margin: 'auto',
    },
  },
  logoSmaller: {
    maxHeight: '75px',
    maxWidth: '75px',
    margin: 'auto',
    padding: '10px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '120px',
      maxWidth: '100px',
      margin: 'auto',
    },
  },
}))

export default useStyles
