import React from 'react'
import { Tab, Tabs } from '@mui/material'
import navbarStyles from '../../../theme/views/navbar.theme'

const NavTab = ({ name, label }) => {
  const classes = navbarStyles()

  return (
    <Tabs value={false}>
      <Tab className={classes.navTab} data-cy={name} label={`< ${label} />`} />
    </Tabs>
  )
}

export default NavTab
