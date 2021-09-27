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
}))

export default useStyles
