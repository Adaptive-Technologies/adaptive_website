import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import useStyles from '../../theme/views/footer.theme'
import theme from '../../theme/theme'
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png'

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const classes = useStyles()

  const Wave = (props) => {
    return (
      <svg
        id='prefix__Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        x={0}
        y={0}
        viewBox={
          isMobile
            ? '0 618 1320 440'
            : '0 518 1920 340'
        }
        xmlSpace='preserve'
        {...props}>
        <path
          d='M0 770.6s100.3-114.4 255.6-107.9 287.7 95 596.6 89.9c108.3-1.8 164.3-28.6 502.6-85.8 154.9-26.2 565.5-77 565.1-10.6-.2 38.7-1.6 439.9 0 423.8H0V770.6z'
          stroke='#250022'
          fill='#250022'
          strokeMiterlimit={10}
        />
      </svg>
    )
  }

  return (
    <Box className={classes.footer}>
      <Wave className={classes.outerWave} />
      <Box className={classes.logoBox}>
        <img
          className={classes.logo}
          src={Adaptive_logo}
          data-cy='logo'
          alt='Adaptive Labs'
          name='Adaptive Labs'
        />
      </Box>
    </Box>
  )
}

export default Footer
