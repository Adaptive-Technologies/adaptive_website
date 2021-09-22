import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  headerSection: {
    backgroundColor: '#250022',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: theme.breakpoints.values.lg,    
    padding: '40px',
    margin: 'auto',
    height: '30px',
  },
  imageBox: {
    justifyContent: 'center',
  },
  image: {
    width: 'auto',
    height: '60px',
  },
  button: {
    color: '#fff',
    minWidth: '0px',
  },
  textBoxLeft: {
    paddingTop: '10px',
    justifyContent: 'flex-start',
  },
  textBoxRight: {
    paddingTop: '10px',
    justifyContent: 'flex-end',
  },
}))

export default useStyles
