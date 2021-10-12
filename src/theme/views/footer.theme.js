import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
  },
  outerWave: {
    position: 'absolute',
    backgroundColor: '#00000000',
    bottom: '0px',
  },
  logoBox: {
    position: 'absolute',
    bottom: '0px',
    display: 'flex',
    width: '97vw',
    justifyContent: 'center',
    paddingBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '98vw',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      padding: '20px 200px',
    },
    [theme.breakpoints.up('uwhd')]: {
      padding: '20px 300px',
    },
    [theme.breakpoints.up('kkkk')]: {
      padding: '20px 350px',
    },
  },
  logo: {
    width: '100px',
    [theme.breakpoints.up('xxl')]: {
      width: '200px',
    },
    [theme.breakpoints.up('kkkk')]: {
      width: '300px',
    },
  },
}))

export default useStyles
