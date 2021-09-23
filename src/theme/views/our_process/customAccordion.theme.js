import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  accordion1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '246px',
    maxHeight: 'auto',
    padding: '20% 40px',
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #F84B9B 0%, #7C264E 100%) 0% 0% no-repeat padding-box',
    [theme.breakpoints.up('md')]: {
      padding: '50px 20%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 27%',
    },
  },
  accordion2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '246px',
    maxHeight: 'auto',
    padding: '20% 40px',
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #D868C1 0%, #6C3461 100%) 0% 0% no-repeat padding-box',

    [theme.breakpoints.up('md')]: {
      padding: '50px 20%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 27%',
    },
  },
  accordion3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '246px',
    maxHeight: 'auto',
    padding: '20% 40px',
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #A581DD 0%, #53416F 100%) 0% 0% no-repeat padding-box',

    [theme.breakpoints.up('md')]: {
      padding: '50px 20%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 27%',
    },
  },
  accordion4: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '246px',
    maxHeight: 'auto',
    padding: '20% 40px',
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #4BA9FF 0%, #265580 100%) 0% 0% no-repeat padding-box',

    [theme.breakpoints.up('md')]: {
      padding: '50px 20%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 27%',
    },
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: '3rem',
    display: 'block',
  },
  bodyFirst: {
    alignSelf: 'flex-start',
    paddingTop: '60px',
  },
  body: {
    alignSelf: 'flex-start',
    paddingTop: '30px',
  },
}))

export default useStyles
