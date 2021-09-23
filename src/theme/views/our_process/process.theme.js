import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '485px',
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #8E0E49 0%, #470725 100%) 0% 0% no-repeat padding-box',
    padding: '0px 40px',
    [theme.breakpoints.up('md')]: {
      padding: '0px 20%',
      height: '375px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0px 27%',
      height: '375px',
    },
  },
  header: {
    paddingBottom: '36px',
  },
  body: {
    alignSelf: 'flex-start',
    paddingBottom: '30px',
  },
}))

export default useStyles
