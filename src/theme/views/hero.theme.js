import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    height: '92.5vh',
    width: '100%',
    objectFit: 'cover',
    '& video': {
      objectFit: 'cover',
    },
    [theme.breakpoints.up('sm')]: {
      height: '94vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '95.5vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '80vh',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '150px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '100px'
    },
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #a43072 30%,  #574f8d 70%)',
  },
}))

export default useStyles
