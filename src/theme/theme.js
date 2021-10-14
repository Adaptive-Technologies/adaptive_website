import { createTheme } from '@mui/material/styles'
import palette from './palette.theme'
import components from './components.theme'
import breakpoints from './breakpoints.theme'
import typography from './typography.theme'

const theme = createTheme({
  palette: palette,
  components: components,
  breakpoints: breakpoints,
  typography: typography,
})

export default theme
