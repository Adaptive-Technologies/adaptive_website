import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
  },

  container: {
    display: 'flex',
    paddingTop: '40px',
  },

  contactUsHeader: {
    justifyContent: 'center',
  },

  text: {
    maxWidth: '100%',
  },
  formHeader: {
    paddingBottom: '30px',
  },
}))

export default useStyles
