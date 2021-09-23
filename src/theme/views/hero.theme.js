import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  section: {
    position: 'relative',
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #a43072 30%,  #574f8d 70%)',
  },
}))

export default useStyles