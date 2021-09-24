import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '250px',
    width: '100%',
    padding: '32px 8px',
    [theme.breakpoints.up('sm')]: {
      padding: '32px 10%',
    },
  },
  gridContainer: {
    maxWidth: '1280px',
    margin: 'auto'
  },
  technologyCard: {
    minWidth: '80px',
    minHeight: '100px',
  },
  icon: {
    margin: '1rem',
  },
}))

export default useStyles