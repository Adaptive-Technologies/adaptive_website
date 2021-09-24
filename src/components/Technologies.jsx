import React from 'react'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import { Grid, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '250px',
    width: '100%',
    padding: '32px 8px',
    [theme.breakpoints.up('sm')]: {
      padding: '32px 10%',
    },
  },
  gridContainer: {
    maxWidth: '1280px',
    margin: 'auto'
  },
  technologyCard: {
    minWidth: '80px',
    minHeight: '100px',
  },
  icon: {
    margin: '1rem',
  },
}))

const Technologies = () => {
  const classes = useStyles()
  const technologies = [
    { name: 'Cypress', color: 'Grey' },
    { name: 'NodeJS', color: 'Green' },
    { name: 'React', color: 'Cyan' },
    { name: 'Rails', color: 'Red' },
    { name: 'Redux', color: 'Purple' },
    { name: 'CSS', color: 'DodgerBlue' },
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
      <LocalDrinkIcon data-cy='icon' />
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
