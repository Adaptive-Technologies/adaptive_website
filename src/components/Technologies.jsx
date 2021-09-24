import React from 'react'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import { Grid, Typography, Box } from '@mui/material'

const Technologies = () => {
  const technologies = [
    { name: 'React', color: 'blue' },
    { name: 'Rails', color: 'red' },
    { name: 'React', color: 'blue' },
    { name: 'Rails', color: 'red' },
    { name: 'React', color: 'blue' },
    { name: 'Rails', color: 'red' },
  ]

  const technologyCard = (technology, color) => (
    <Grid item data-cy='technology'>
      <LocalDrinkIcon data-cy='icon' />
      <Typography data-cy='name' style={{ color: color }}>
        {technology}
      </Typography>
    </Grid>
  )

  return (
    <Box data-cy='technologies-section'>
      <Typography data-cy='header'>{'< technologies />'}</Typography>
      <Grid container data-cy='technologies-section'>
        {technologies.map((tech) => {
          return technologyCard(tech.name, tech.color)
        })}
      </Grid>
    </Box>
  )
}

export default Technologies
