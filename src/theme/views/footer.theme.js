import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
  },
  innerWave: {
    position: 'absolute',
    backgroundColor: '#00000000',
    bottom: '0px',
  },
  outerWave: {
    position: 'absolute',
    backgroundColor: '#00000000',
    bottom: '0px',
    marginBottom: '0px',
    
  },
  circleBox: {
    position: 'absolute',
    display: 'flex',
    bottom: '30px',
    [theme.breakpoints.up('sm')]: {
      bottom: '80px',
    },
    [theme.breakpoints.up('md')]: {
      bottom: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '50px',
    },
    [theme.breakpoints.up('xl')]: {
      bottom: '90px',
    },
  },
  circle1: {
   

  },
  circle2: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
}))

export default useStyles
