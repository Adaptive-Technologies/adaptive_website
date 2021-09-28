import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
  },
  innerWave: {
    position: 'absolute',
    backgroundColor: '#0000000',
    bottom: '-160px',
    [theme.breakpoints.up('sm')]: {
      bottom: '-250px',
    },
    [theme.breakpoints.up('md')]: {
      bottom: '-220px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-300px',
    },
    [theme.breakpoints.up('xl')]: {
      bottom: '-370px',
    },
  },
  outerWave: {
    position: 'absolute',
    backgroundColor: '#0000000',
    bottom: '-200px',
    marginBottom: '0px',
    [theme.breakpoints.up('sm')]: {
      bottom: '-290px',
    },
    [theme.breakpoints.up('md')]: {
      bottom: '-260px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-340px',
    },
    [theme.breakpoints.up('xl')]: {
      bottom: '-410px',
    },
  },
  circleBox: {
    position: 'absolute',
    display: 'flex',
    bottom: '-130px',
    [theme.breakpoints.up('sm')]: {
      bottom: '-170px',
    },
    [theme.breakpoints.up('md')]: {
      bottom: '-200px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-245px',
    },
    [theme.breakpoints.up('xl')]: {
      bottom: '-270px',
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
