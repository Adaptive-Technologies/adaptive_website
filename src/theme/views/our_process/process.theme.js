import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '485px',
    backgroundColor: '#8E0E49',
    padding: '0px 26px',
    [theme.breakpoints.up('md')]: {
      padding: '0px 20%',
      height: '375px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '230px 27%',
      height: '375px',
    },
  },
  header: {
    paddingBottom: '36px',
    textTransform: 'uppercase',
  },
  body: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: '30px',
  },
}))

export default useStyles
