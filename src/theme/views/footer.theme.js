import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
  },
  innerWave: {
    position: 'absolute',
    backgroundColor: '#0000000',
    bottom: '-400px',
  },
  outerWave: {
    position: 'absolute',
    backgroundColor: '#0000000',
    bottom: '-400px',
    marginBottom: '0px',
  },
  circleBox: {
    position: 'absolute',
    display: 'flex',
    bottom: '-300px',
  },
  circle1: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  circle2: {},
}))

export default useStyles
