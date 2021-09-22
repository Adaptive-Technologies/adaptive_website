import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: theme.breakpoints.values.lg,
    margin: 'auto',
    height: '30px',
    padding: '32px 16px',
    [theme.breakpoints.up('lg')]: {
      padding: '40px',
    },
  },
  logoBox: {
    justifyContent: 'center',
  },
  logo: {
    width: 'auto',
    height: '40px',
    [theme.breakpoints.up('lg')]: {
      height: '60px',
    },
  },
  drawer: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: '8px 16px',
  },
  navTab: {
    minWidth: '0px',
  },
  menuButton: {
    color: theme.palette.text.primary,
    marginLeft: 'auto',
  },
  tabsLeft: {
    paddingTop: '10px',
    justifyContent: 'flex-start',
  },
  tabsRight: {
    paddingTop: '10px',
    justifyContent: 'flex-end',
  },
}))

export default useStyles
