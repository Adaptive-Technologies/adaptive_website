import React from 'react'
import Goo from 'gooey-react'
import { Box } from '@mui/system'
import { animated, useSpring } from 'react-spring'
import useStyles from '../../theme/views/footer.theme'

const config = { mass: 5, tension: 70, friction: 200 }

const Footer = () => {
  const classes = useStyles()
  const styles = useSpring({
    config,
    loop: { reverse: true },
    from: { y: -100 },
    to: { y: 50 },
  })
  // const styles = useTrail({
  //   loop: { reverse: true },
  //   from: { y: -100 },
  //   to: { y: 50 },
  // })
  // const { x } = useSpring({
  //   from: { x: 0 },
  //   to: { y: 50 },
  // })

  // useEffect(() => {
  //   x.start({ config: { friction: 100 } })
  // }, [x])

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
        <svg className={classes.circleBox} width='100%' height='320'>
          <animated.circle
            style={styles}
            cx='10%'
            cy='75%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='20%'
            cy='80%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='30%'
            cy='90%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='40%'
            cy='94%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='50%'
            cy='90%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='60%'
            cy='80%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='70%'
            cy='70%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='80%'
            cy='60%'
            fill='#F84B9B'
            r='32'
          />
          <animated.circle
            style={styles}
            cx='90%'
            cy='55%'
            fill='#F84B9B'
            r='32'
          />
        </svg>
        <Wave className={classes.innerWave} />
      </Goo>
      <Wave className={classes.outerWave} />
    </Box>
  )
}

export default Footer
