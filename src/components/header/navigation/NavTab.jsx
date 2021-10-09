import React from 'react'
import { Tab, Tabs } from '@mui/material'
import useStyles from '../../../theme/views/header.theme'
import { HashLink } from 'react-router-hash-link'

const NavTab = ({ name, label }) => {
  const classes = useStyles()

  return (
    <Tabs value={false}>
      <Tab
        data-cy={name}
        className={classes.navTab}
        component={HashLink}
        label={`< ${label} />`}
        smooth
        to={`#${name}`}
      />
    </Tabs>
  )
}

export default NavTab
