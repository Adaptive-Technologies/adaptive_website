import React from 'react'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
//import logo_web_timotuz from '../assets/icons/vials/lab1.svg'
import { Grid, Typography, Box, CardMedia } from '@mui/material'
import useStyles from '../theme/views/technologies.theme'

const logo = require("../assets/icons/vials/lab1.svg")

const Technologies = () => {
  const classes = useStyles()
  const technologies = [
    { icon: 'icon', name: 'Cypress', color: 'Grey' },
    { icon: 'icon', name: 'NodeJS', color: 'Green' },
    { icon: 'icon', name: 'React', color: 'Cyan' },
    { icon: 'icon', name: 'Rails', color: 'Red' },
    { icon: 'icon', name: 'Redux', color: 'Purple' },
    { icon: 'icon', name: 'CSS', color: 'DodgerBlue' },
  ]

  const technologyCard = (technology, color) => (
    <Grid
      item
      container
      data-cy='technology'
      className={classes.technologyCard}
      direction='column'
      special='center'
      xs={4}
      lg={2}>
      <img
        data-cy='logo'
        src={logo}
        style={{ height: '72px' }}
        alt='Timotuz Company Logo'
      />
      <Typography
        data-cy='name'
        className={classes.icon}
        variant='body2'
        style={{ color: color }}>
        {technology}
      </Typography>
    </Grid>
  )

  return (
    <Box data-cy='technologies-section' className={classes.section}>
      <Typography data-cy='header' variant='h2'>
        {'< our technologies />'}
      </Typography>
      <Grid container className={classes.gridContainer} direction='row'>
        {technologies.map((tech) => {
          return technologyCard(tech.name, tech.color)
        })}
      </Grid>
    </Box>
  )
}

export default Technologies
