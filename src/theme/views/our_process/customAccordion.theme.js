import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '246px',
    maxHeight: 'auto',
    padding: '20% 26px',

    [theme.breakpoints.up('md')]: {
      padding: '50px 20%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 27%',
    },
  },
  pink: {
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #F84B9B 0%, #F84B9B 100%) 0% 0% no-repeat padding-box',
  },
  purPink: {
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #D868C1 0%, #D868C1 100%) 0% 0% no-repeat padding-box',
  },
  purBlue: {
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #A581DD 0%, #A581DD 100%) 0% 0% no-repeat padding-box',
  },
  babyBlue: {
    background:
      'transparent radial-gradient(closest-side at 50% 50%, #4BA9FF 0%, #4BA9FF 100%) 0% 0% no-repeat padding-box',
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: '3rem',
    display: 'block',
  },
  bodyFirst: {
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingTop: '60px',
  },
  body: {
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingTop: '30px',
  },
}))

export default useStyles
