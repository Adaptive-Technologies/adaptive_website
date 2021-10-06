import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import useStyles from '../../theme/views/our_process/customAccordion.theme'

const CustomAccordion = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState()

  const handleChange = (accordion) => (event, isExpanded) => {
    setExpanded(isExpanded ? accordion : false)
  }
  return (
    <>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion1'}
        onChange={handleChange('accordion1')}
        className={`${classes.accordion} ${classes.pink}`}>
        <AccordionSummary
          data-cy='step-1'
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography data-cy='heading' variant='h3' className={classes.header}>
            1. Meeting You
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          data-cy='accordionDetails-1'
          className={classes.accordionDetails}>
          <Typography
            data-cy='body-1'
            variant='body2'
            className={classes.bodyFirst}>
            First we will arrange a meeting with you, in person or remote, we're
            flexible.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            During the meeting, we want to get to know you and the expectations
            on your application. This provides us with core information to
            deliver a first draft or "LoFi".
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            Once you're happy, we can move forward with the design phase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion2'}
        onChange={handleChange('accordion2')}
        className={`${classes.accordion} ${classes.purPink}`}>
        <AccordionSummary
          data-cy='step-2'
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography data-cy='heading' variant='h3' className={classes.header}>
            2. Design Phase
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          data-cy='accordionDetails-2'
          className={classes.accordionDetails}>
          <Typography
            data-cy='body-1'
            variant='body2'
            className={classes.bodyFirst}>
            During this phase we deal with generating a detailed draft or "HiFi"
            and application architecture. How it will look and work on
            completion. Conducting user testing to verify a friendly and
            welcoming UI/UX.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            The "HiFi's" will be shared via a link which gives the possibility
            to navigate the application and create comments and notes. A final
            meeting is arranged to review aforementioned "HiFi's".
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            Hopefully everything is in order and development can begin.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion3'}
        onChange={handleChange('accordion3')}
        className={`${classes.accordion} ${classes.purBlue}`}>
        <AccordionSummary
          data-cy='step-3'
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography data-cy='heading' variant='h3' className={classes.header}>
            3. Developing
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          data-cy='accordionDetails-3'
          className={classes.accordionDetails}>
          <Typography
            data-cy='body-1'
            variant='body2'
            className={classes.bodyFirst}>
            Here is where those designs become reality. We work from the agreed
            upon "Hifi's", on completion the application should be almost
            identical to these. During this phase we deploy a development site,
            you will receive a link, so you can monitor the progress made.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            As Heraclitus said "change is the only constant in life". Which is
            why we'll have small check-in's to make sure you're happy and
            discuss any changes and how to approach them.
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            We use automated testing, which reduces bugs, improves
            maintainability and a higher standard of code. Less problems for you
            and less head scratching for us.
          </Typography>
          <Typography data-cy='body-4' variant='body2' className={classes.body}>
            That’s it, time to move forward.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion4'}
        onChange={handleChange('accordion4')}
        className={`${classes.accordion} ${classes.babyBlue}`}>
        <AccordionSummary
          data-cy='step-4'
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography data-cy='heading' variant='h3' className={classes.header}>
            4. Delivery
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          data-cy='accordionDetails-4'
          className={classes.accordionDetails}>
          <Typography
            data-cy='body-1'
            variant='body2'
            className={classes.bodyFirst}>
            The time has come for the final application delivery. We'll give you
            a guided tour of your application, answer your questions, supply any
            documentation and deploy the site on your domain for the world to
            see.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            That's the Adaptive Process
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default CustomAccordion
