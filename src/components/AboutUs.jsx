import React from 'react'
import staffCards from '../assets/data/staffCards'
import { Box, Typography, Container, Grid, CardMedia } from '@mui/material'

const AboutUs = () => {
  const staffSection = staffCards.map((staffCard) => (
    <Box data-cy='staff-card'>
      <Grid item xs={12} md={4}>
        <CardMedia data-cy='image' component='img' image={staffCard.image} height='283.98' />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography data-cy='name' variant='h3'>
          {staffCard.name}
        </Typography>
        <Typography data-cy='description' variant='body1'>
          {staffCard.description}
        </Typography>
      </Grid>
    </Box>
  ))

  return (
    <Box data-cy='about-us'>
      <Container maxWidth='md'>
        <Typography data-cy='header' variant='h2'>
          {'< About Us />'}
        </Typography>
        <Typography data-cy='description' variant='body1'>
          Adaptive Labs Nordics was founded by a group of passionate developers
          and designers. With a goal to build a company that puts its customers
          needs first through Agile Methodologies and close partnerships. Using
          automated testing to deliver high quality full stack applications on
          time and within scope. We use agile methodologies and unprecedented
          creativity to meet your technical needs. Driving innovation and the
          future by teaching future developers through Craft Academy.
        </Typography>
        {staffSection}
      </Container>
    </Box>
  )
}

export default AboutUs
