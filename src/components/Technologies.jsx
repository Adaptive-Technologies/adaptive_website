import React from 'react'
import lab1 from '../assets/icons/vials/lab1.svg'
import lab2 from '../assets/icons/vials/lab2.svg'
import lab3 from '../assets/icons/vials/lab3.svg'
import lab4 from '../assets/icons/vials/lab4.svg'
import lab5 from '../assets/icons/vials/lab5.svg'
import lab6 from '../assets/icons/vials/lab6.svg'
import { Grid, Typography, Box } from '@mui/material'
import useStyles from '../theme/views/technologies.theme'

const Technologies = ({id}) => {
  const classes = useStyles()
  const technologies = [
    { icon: lab1, name: 'Cypress', color: '#919191', id: 1 },
    { icon: lab2, name: 'NodeJS', color: '#83BA63', id: 2 },
    { icon: lab3, name: 'React', color: '#61DBFB', id: 3 },
    { icon: lab4, name: 'Rails', color: '#CC0000', id: 4 },
    { icon: lab5, name: 'Redux', color: '#764ABC', id: 5 },
    { icon: lab6, name: 'RSpec', color: '#ef4d6f', id: 6 },
  ]

  const technologyCard = (technology, color, icon, id) => (
    <Grid
      key={id}
      item
      container
      data-cy='technology'
      className={classes.technologyCard}
      direction='column'
      special='center'
      xs={4}
      lg={2}>
      <img data-cy='icon' src={icon} className={classes.icon} alt='Vial icon' />
      <Typography variant='techName' data-cy='name' style={{ color: color }}>
        {technology}
      </Typography>
    </Grid>
  )

  return (
    <Box data-cy='technologies-section' className={classes.section} id={id}>
      <Typography data-cy='header' variant='h2'>
        {'< technologies />'}
      </Typography>
      <Grid container className={classes.gridContainer} direction='row'>
        {technologies.map((tech) => {
          return technologyCard(tech.name, tech.color, tech.icon, tech.id)
        })}
      </Grid>
    </Box>
  )
}

export default Technologies
