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
          Since its inception in September 2021 Adaptive Labs, a Gothenburg
          based IT services operation, has helped businesses around Europe and
          North America in adopting technology to support their core business,
          and help them increase efficiency, productivity and profitability.
          Digitalization is however not only changing the way we do business, it
          also changes the way we work and what skills we as professionals need
          to have. In order to address the current shortage of skill on the
          market, Adaptive Labs has operated a training and education service
          under the <a href="https://craftacademy.se">Craft Academy</a>  brand. Learners from around the world and with
          various backgrounds, has been helped by Craft Academy to re-skill and
          transition into the software development industry.
          <br></br>
          <br></br>
          The company’s experience shows that training and education is closely
          connected to consultancy, and complements the portfolio of services..
          In order to enhance the customer experience and streamline the
          company’s marketing, the separate brands associated with the
          respective business areas, will be combined into one; Nomads Of Code.
          <br></br>
          <br></br>
          The new brand reflects in a better way the global reach of the company
          services as well as the focus on remote work and delivery. We believe
          that our ols, as well as new customers, will appreciate the change and
          benefit from a clearer communication from us.
        </Typography>
        {staffSection}
      </Container>
    </Box>
  )
}

export default AboutUs
