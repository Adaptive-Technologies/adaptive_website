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
      bottom: '40px',
    },
    [theme.breakpoints.up('xxl')]: {
      bottom: '60px',
    },
    [theme.breakpoints.up('uwhd')]: {
      bottom: '80px',
    },
    [theme.breakpoints.up('kkkk')]: {
      bottom: '100px',
    },
  },
  circle1: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  circle2: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
}))

export default useStyles
