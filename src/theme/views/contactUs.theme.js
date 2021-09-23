import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    paddingTop: '20px',
  },
  headerText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '50px',
  },
  contentContainer: {
    display: 'flex',
    width: '80%',
    marginLeft: '100px',
  },

  contactUsHeaderText: {
    justifyContent: 'center',
  },
  contactUsText: {
    justifyContent: 'flex-start',
    paddingTop: '20px',
  },
  contactOptions: {
    flexDirection: 'column',
    paddingTop: '20px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
