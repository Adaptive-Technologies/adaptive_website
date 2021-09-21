import { makeStyles } from '@material-ui/core';

const navbarStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('xs')]: {
      height: '100px'
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#250022',
    width: '100%',
    height: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 'auto',
    height: '80px',
    justifySelf: 'center',
  },
  button: {
    color: '#fff',
    display: 'absolute',
  },

  textBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    paddingTop: '10px',
  },
}));

export default navbarStyles;
