import React from 'react'
import staffCards from '../assets/data/staffCards'
import { Box, Typography, Container, Grid, CardMedia } from '@mui/material'
import useStyles from '../theme/views/aboutUs.theme'

const AboutUs = ({ id }) => {
  const classes = useStyles()

  const staffSection = staffCards.map((staffCard, index) => {
    const borderColor = () => {
      if (index % 2 === 1) {
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
            alt={`Photo of ${staffCard.name}`}
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
          <Typography
            data-cy='name'
            className={classes.name}
            variant='h4'
            gutterBottom>
            {staffCard.name}
          </Typography>
          <Box className={classes.staffDescription}>
            <Typography data-cy='description' component='div' variant='body2'>
              {staffCard.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    )
  })

  return (
    <Box data-cy='about-us' className={classes.section} id={id}>
      <Container maxWidth='lg'>
        <Typography data-cy='header' variant='h2'>
          {'< about us />'}
        </Typography>
        <Typography
          data-cy='description'
          variant='body1'
          className={classes.description}>
          Adaptive Labs Nordics was founded by a group of passionate developers
          and designers. With a goal to build a company that puts its customers
          needs first through Agile Methodologies and close partnerships. <br></br><br></br> Using
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
