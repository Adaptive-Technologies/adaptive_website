import React from 'react'
import staffCards from '../assets/data/staffCards'
import { Box, Typography, Container, Grid, CardMedia } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: '2rem',
  },
  staffCard: {
    marginTop: '4rem',
  },
  cardCell: {
    padding: '1rem',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    border: '4px solid white',
    borderRadius: '100%',
  },
  pinkBorder: {
    boxShadow: `0 0 0 4px ${theme.palette.secondary.main}`,
  },
  blueBorder: {
    boxShadow: `0 0 0 4px ${theme.palette.sixth.main}`,
  },
  description: {
    padding: '3rem',
  }
}))

const AboutUs = () => {
  const classes = useStyles()

  const staffSection = staffCards.map((staffCard, index) => {
    const borderColor = () => {
      if (index % 2 == 1) {
        return classes.pinkBorder
      } else {
        return classes.blueBorder
      }
    }
    
    return (
      <Grid
        container
        data-cy='staff-card'
        className={classes.staffCard}
        key={`staffCard-${index}`}>
        <Grid item className={classes.cardCell} xs={12} md={4}>
          <CardMedia
            data-cy='image'
            className={`${classes.image} ${borderColor()}`}
            component='img'
            image={staffCard.image}
          />
        </Grid>
        <Grid
          item
          container
          className={classes.cardCell}
          direction='column'
          justifyContent='center'
          xs={12}
          md={8}>
          <Typography data-cy='name' variant='h3' gutterBottom>
            {staffCard.name}
          </Typography>
          <Typography data-cy='description' variant='body1'>
            {staffCard.description}
          </Typography>
        </Grid>
      </Grid>
    )
  })

  return (
    <Box data-cy='about-us' className={classes.section}>
      <Container maxWidth='md'>
        <Typography data-cy='header' variant='h2'>
          {'< About Us />'}
        </Typography>
        <Typography data-cy='description' variant='body1' className={classes.description}>
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
