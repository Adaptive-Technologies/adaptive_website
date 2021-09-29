import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    background:
      'transparent linear-gradient(165deg, #250022 0%, #250022 14%, #F84B9B 37%, #A581DD 51%, #6588E2 63%, #2B6BA7 72%, #250022 88%, #000000 100%) 0% 0% no-repeat padding-box',
    paddingBottom: '200px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '400px',
    },
    [theme.breakpoints.up('xxl')]: {
      paddingBottom: '500px',
    },
    [theme.breakpoints.up('kkkk')]: {
      paddingBottom: '600px',
    },
  },
}))

export default useStyles
