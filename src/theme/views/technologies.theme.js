import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '250px',
    width: '100%',
    padding: '32px 8px',
    [theme.breakpoints.up('sm')]: {
      padding: '100px 10%',
    },
  },
  gridContainer: {
    marginTop: '50px',
    maxWidth: '1280px',
    margin: 'auto',
  },
  technologyCard: {
    minWidth: '80px',
    minHeight: '100px',
    paddingTop: '16px',
  },
  icon: {
    height: '80px',
  },
}))

export default useStyles
