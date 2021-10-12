import React from 'react'
import Goo from 'gooey-react'
import { Box, useMediaQuery } from '@mui/material'
import { animated, useSpring } from 'react-spring'
import useStyles from '../../theme/views/footer.theme'
import theme from '../../theme/theme'
import Adaptive_logo from '../../assets/images/Adaptive_logo_WHITE_PINK.png'

const config = { mass: 200, tension: 40, friction: 0, dampening: 0 }

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isBig = useMediaQuery(theme.breakpoints.up('xl'))
  const isFullHD = useMediaQuery(theme.breakpoints.up('xxl'))
  const isUWHD = useMediaQuery(theme.breakpoints.up('uwhd'))
  const is4k = useMediaQuery(theme.breakpoints.up('kkkk'))
  const classes = useStyles()
  const styles = useSpring({
    config,
    loop: { reverse: true },
    from: { y: 100 },
    to: { y: 50 },
  })

  const Wave = (props) => {
    return (
      <svg
        id='prefix__Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        x={0}
        y={0}
        viewBox={
          isMobile
            ? '0 618 1920 440'
            : isBig
            ? '0 618 1920 160'
            : isFullHD
            ? '0 618 1920 155'
            : isUWHD
            ? '0 618 1920 140'
            : is4k
            ? '0 618 1920 60'
            : '0 618 1920 240'
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
      <Goo>
        <svg className={classes.circleBox} width='100%' height='320'>
          <animated.circle
            style={styles}
            cx='20%'
            cy='82%'
            fill='#F84B9B'
            r='32'
          />

          <animated.circle
            className={classes.circle1}
            style={styles}
            cx='40%'
            cy='100%'
            fill='#F84B9B'
            r='32'
          />

          <animated.circle
            style={styles}
            cx='60%'
            cy='90%'
            fill='#F84B9B'
            r='32'
          />

          <animated.circle
            className={classes.circle2}
            style={styles}
            cx='80%'
            cy='70%'
            fill='#F84B9B'
            r='32'
          />
        </svg>
        <Wave className={classes.innerWave} />
      </Goo>
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
