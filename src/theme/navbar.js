import { makeStyles } from '@material-ui/core';

const navbarStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: '#250022',
    width: '100%',
  },
  container: {
    [theme.breakpoints.up('xs')]: {
      height: '30px',
    },
    display: 'flex',
    maxWidth: '80%',
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
    padding: '40px',
    margin: 'auto'
  },

  imageBox: {
    justifyContent: 'center',
  },
  image: {
    width: 'auto',
    height: '60px',
  },
  button: {
    color: '#fff',
    minWidth: '0px',
  },

  textBoxLeft: {
    paddingTop: '10px',
    justifyContent: 'flex-start',
  },
  textBoxRight: {
    paddingTop: '10px',
    justifyContent: 'flex-end',
  },
}));

export default navbarStyles;
