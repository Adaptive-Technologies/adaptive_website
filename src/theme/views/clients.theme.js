import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  clientsSection: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '500px',
  },
  background: {
    height: '70vh',
    minHeight: '500px',
    [theme.breakpoints.up('lg')]: {
      height: '80vh',
    },
  },
  contentBox: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '15%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '15%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '5%',
    },
  },
  grid: {
    alignItems: 'center',
    marginTop: '20%',
    [theme.breakpoints.up('md')]: {
      marginTop: '10%',
    },
  },
  gridItem: {
    paddingBottom: '36px',
  },
  logo: {
    maxHeight: '75px',
    maxWidth: '75px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxHeight: '100px',
      maxWidth: '100px',
      margin: 'auto',
    },
  },
}))

export default useStyles
