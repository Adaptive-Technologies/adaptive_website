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
  const [expanded, setExpanded] = useState(false)

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
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography variant='h3' className={classes.header}>
            1. Meeting You
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography variant='body2' className={classes.bodyFirst}>
            First we arrange a meeting with you, in person or over the web.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            During the meeting we want to get to know you better and what you
            want from you application. Once we have gotten an idea of what you
            want and who you are, we will go away and work on the LoFi’s and
            arrange a second meeting for delivery.
          </Typography>
          <Typography variant='body2' className={classes.body}>
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
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography variant='h3' className={classes.header}>
            2. Design Phase
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography variant='body2' className={classes.bodyFirst}>
            First we arrange a meeting with you, in person or over the web.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            During the meeting we want to get to know you better and what you
            want from you application. Once we have gotten an idea of what you
            want and who you are, we will go away and work on the LoFi’s and
            arrange a second meeting for delivery.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            Once you’re happy with the LoFi’s we have produce we can move
            forward to the next phase.
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
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography variant='h3' className={classes.header}>
            3. Developing
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography variant='body2' className={classes.bodyFirst}>
            First we arrange a meeting with you, in person or over the web.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            During the meeting we want to get to know you better and what you
            want from you application. Once we have gotten an idea of what you
            want and who you are, we will go away and work on the LoFi’s and
            arrange a second meeting for delivery.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            Once you’re happy with the LoFi’s we have produce we can move
            forward to the next phase.
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
          expandIcon={<KeyboardArrowDownIcon className={classes.icon} />}>
          <Typography variant='h3' className={classes.header}>
            4. Delivery
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography variant='body2' className={classes.bodyFirst}>
            First we arrange a meeting with you, in person or over the web.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            During the meeting we want to get to know you better and what you
            want from you application. Once we have gotten an idea of what you
            want and who you are, we will go away and work on the LoFi’s and
            arrange a second meeting for delivery.
          </Typography>
          <Typography variant='body2' className={classes.body}>
            Once you’re happy with the LoFi’s we have produce we can move
            forward to the next phase.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default CustomAccordion
