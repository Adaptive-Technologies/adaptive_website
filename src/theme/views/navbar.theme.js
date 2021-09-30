import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    position: 'sticky',
    top: '0',
    zIndex: '100'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    height: '30px',
    padding: '40px 16px 40px 16px',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      padding: '40px',
    },
  },
  logo: {
    objectFit: 'contained',
    height: '50px',
    [theme.breakpoints.up('lg')]: {
      height: '60px',
    },
  },
  drawer: {
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
    justifyContent: 'flex-start',
  },
  tabsRight: {
    justifyContent: 'flex-end',
  },
}))

export default useStyles
