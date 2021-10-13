import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: '70px 0',
    margin: '10px 0',
  },
  staffCard: {
    marginTop: '4rem',
  },
  cardCell: {
    padding: '3rem 3rem',
  },
  image: {
    maxWidth: '252px',
    objectFit: 'contain',
    border: '4px solid #FFD9F3',
    borderRadius: '100%',
    margin: 'auto',
  },
  pinkBorder: {
    boxShadow: `0 0 0 4px ${theme.palette.secondary.main}`,
  },
  blueBorder: {
    boxShadow: `0 0 0 4px ${theme.palette.sixth.main}`,
  },
  name: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      paddingBottom: '0',
    },
  },
  staffDescription: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      maxWidth: '100%',
    },
  },
  description: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      padding: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '3rem',
    },
  },
}))

export default useStyles
