import React from 'react'
import { Box } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import useStyles from '../theme/views/contactUs.theme'
import ContactForm from './ContactForm'

const ContactUs = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.headerText}>
          <Typography variant='h2' className={classes.header}>
            {'< Contact us />'}
          </Typography>
        </Box>
        <Box className={classes.contentContainer}>
          <Grid item container lg={6}>
            <Grid container className={classes.contactUsHeaderText}>
              <Typography variant='h3'>Get in touch</Typography>
            </Grid>
            <Grid container className={classes.contactUsText}>
              <Typography variant='body2'>
                To know more about what we can offer you, please get in touch.
                Feel free to call, email, send us a message on LinkedIn or use
                the form
              </Typography>
            </Grid>
            <Grid container className={classes.contactOptions}>
              <Typography variant='body1'>Phone: </Typography>
              <Typography variant='body1'>
                Email: info@adaptivelabsnordics.se
              </Typography>
              <Link
                target='_blank'
                href='https://www.linkedin.com/company/adaptive-labs-nordics/'>
                <Typography>Linkedin </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item container lg={6}>
            <Box className={classes.form}>
              <ContactForm />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ContactUs
