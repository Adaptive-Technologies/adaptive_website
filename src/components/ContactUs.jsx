import React from 'react'
import { Box } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import useStyles from '../theme/views/contactUs.theme'
import ContactForm from './ContactForm'

const ContactUs = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.headerText}>
        <Typography
          variant='h2'
          className={classes.header}
          data-cy='contact-us-header'>
          {'< Contact us />'}
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Grid item container lg={1}></Grid>
        <Grid item container lg={4}>
          <Grid item container className={classes.contactUsHeader}>
            <Typography variant='h3' data-cy='contact-us-sub-header'>
              Get in touch
            </Typography>
          </Grid>
          <Box className={classes.text}>
            <Typography variant='body2' data-cy='contact-us-text'>
              To know more about what we can offer you, please get in touch.
              Feel free to call, email, send us a message on LinkedIn or use the
              form
            </Typography>
          </Box>
          <Box>
            <Typography variant='body1'>Phone: </Typography>
            <Typography variant='body1'>
              Email: info@adaptivelabsnordics.se
            </Typography>
            <Link
              target='_blank'
              href='https://www.linkedin.com/company/adaptive-labs-nordics/'>
              <Typography>Linkedin </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item container lg={2}></Grid>
        <Grid item container lg={4} className={classes.contactUsHeader}>
          <Typography variant='h3' data-cy='contact-us-form-header' className={classes.formHeader}>
            Send us a message
          </Typography>
          <ContactForm />
        </Grid>
        <Grid item container lg={1}></Grid>
      </Box>
    </>
  )
}

export default ContactUs
