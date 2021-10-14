import React from 'react'
import { Box } from '@mui/system'
import { Container, Grid, Link, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import useStyles from '../theme/views/contactUs.theme'
import ContactForm from './ContactForm'

const ContactUs = ({ id }) => {
  const classes = useStyles()

  return (
    <Box className={classes.section} id={id}>
      <Box className={classes.headerText}>
        <Typography
          variant='h2'
          className={classes.header}
          data-cy='contact-us-header'>
          {'< Contact us />'}
        </Typography>
      </Box>
      <Grid container className={classes.container}>
        <Grid item className={classes.containerGetInTouch} lg={4}>
          <Container className={classes.containerGetInTouch}>
            <Typography
              className={classes.contactUsSubHeader}
              variant='h3'
              data-cy='contact-us-sub-header'>
              Get in touch
            </Typography>
            <Typography
              className={classes.text}
              variant='body2'
              data-cy='contact-us-text'>
              To know more about what we can offer you, please get in touch.
              Feel free to send us an email, a message on LinkedIn or use the
              form. We will be happy to discuss your requirements and present a
              possible solution.
            </Typography>
            <Typography className={classes.contactData} variant='h4'>
              Email: info@adaptivelabs.se
            </Typography>
            <Box className={classes.links}>
              <Link
                target='_blank'
                href='https://www.linkedin.com/company/adaptive-labs-nordics/'>
                <LinkedInIcon />
              </Link>
            </Box>
          </Container>
        </Grid>
        <Grid
          item
          sm={8}
          md={6}
          lg={4}
          className={classes.formContainer}>
          <Typography
            variant='h3'
            data-cy='contact-us-form-header'
            className={classes.formHeader}>
            Send us a message
          </Typography>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactUs
