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
        className={classes.accordion1}>
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
            First we arrange a meeting with you, in person or over the web.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            During the meeting we want to get to know you better and what you
            want from you application. Once we have gotten an idea of what you
            want and who you are, we will go away and work on the LoFi’s and
            arrange a second meeting for delivery.
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            Once you’re happy with the LoFi’s we have produce we can move
            forward to the next phase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion2'}
        onChange={handleChange('accordion2')}
        className={classes.accordion2}>
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
            During this phase we will deal with HiFi’s and technical analysis.
            Basically the how it will look and how it will work.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            We will conduct user testing to make sure the UX/UI creates a
            friendly and welcoming experience for the user.
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            You will receive a set of links to these Hifi’s where you can look
            around make notes and comments before we arrange a meeting with you
            to go through these.
          </Typography>
          <Typography data-cy='body-4' variant='body2' className={classes.body}>
            Hopefully all is in line with what you asked for and we can move
            forward.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion3'}
        onChange={handleChange('accordion3')}
        className={classes.accordion3}>
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
            Here is where those designs become a reality. We work from the
            HiFi’s we agreed on and by the time we are done they should look
            almost identical. A link to a development site will be sent, so you
            can always check in on the progress we are making.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            Now we all know things change, which is why during the development
            we’ll have small checkins to make sure you’re happy. Here we can
            discuss any requested changes and how to go about them.
          </Typography>
          <Typography data-cy='body-3' variant='body2' className={classes.body}>
            We use something called automated testing, which means manual
            testing is reduced exponentially, it means less bugs and overall a
            higher standard of code, which means less problems for you and less
            head scratching for us.
          </Typography>
          <Typography data-cy='body-4' variant='body2' className={classes.body}>
            That’s it time to move forward.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        disableGutters
        elevation={0}
        expanded={expanded === 'accordion4'}
        onChange={handleChange('accordion4')}
        className={classes.accordion4}>
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
            The time has come for us to deliver the final application, we’ll
            walk you through the site one last time, answer questions, deliver
            any documentation that’s needed and push it out to your live domain
            for the world to see.
          </Typography>
          <Typography data-cy='body-2' variant='body2' className={classes.body}>
            Thats the Adaptive Process
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default CustomAccordion
