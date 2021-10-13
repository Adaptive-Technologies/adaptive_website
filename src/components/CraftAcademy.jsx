import { Box, Container, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from '../theme/views/craftAcademy.theme'
import CraftAcademyLogo from '../assets/images/craft_academy.svg'

const CraftAcademy = () => {
  const classes = useStyles()
  return (
    <Box className={classes.section}>
      <Container maxWidth='md'>
        <Typography className={classes.header} data-cy='header' variant='h2'>
          {'< craft academy />'}
        </Typography>
        <Typography
          className={classes.subHeader}
          data-cy='sub-header'
          variant='h5'>
          The future is written in code
        </Typography>
        <Typography
          data-cy='description-1'
          variant='body2'
          className={classes.description}>
          Digitalization is not only changing the way we do business, it also
          changes the way we work and what skills we as professionals need to
          have. <br />
          Gaining those skills in an ever-changing landscape is a challenge in
          itself and presents a unique set of problems for educational
          institutions. Adaptive Labs wants to be a part of the solution.
        </Typography>
        <Typography
          data-cy='description-2'
          variant='body2'
          className={classes.description}>
          Craft Academy is our training and education brand. With Craft Academy,
          you'll learn about digitalization and web development in an exciting,
          fast-paced environment and get help to adapt to the new paradigm.
        </Typography>
        <img
          className={classes.logo}
          src={CraftAcademyLogo}
          data-cy='logo'
          alt='Craft Academy Logo'
        />
        <Box className={classes.button}>
          <Button
            data-cy='contact-us-btn'
            special='orange'
            smooth
            href='https://craftacademy.se'>
            {`{ adapt yourself }`}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default CraftAcademy
