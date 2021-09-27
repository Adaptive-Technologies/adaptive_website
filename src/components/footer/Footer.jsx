import React from 'react'
import Goo from 'gooey-react'
import { Box } from '@mui/system'
import { useSpring, animated } from 'react-spring'
import useStyles from '../../theme/views/footer.theme'

const Footer = () => {
  const classes = useStyles()
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  })

  const Wave = (props) => {
    return (
      <svg
        id='prefix__Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        x={0}
        y={0}
        viewBox='0 618 1920 240'
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
      {/* <animated.div
        style={{
          width: '94.77%',
          height: 80,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...styles,
        }}
      /> */}
      <Goo>
        <Wave className={classes.innerWave}/>
      </Goo>
        <Wave className={classes.outerWave}/>
    </Box>
  )
}

export default Footer
