import React from 'react'
import { Tab, Tabs } from '@material-ui/core'
import navbarStyles from '../../theme/views/navbar.theme'

const NavButton = ({ name, label }) => {
  const classes = navbarStyles()

  return (
    <Tabs value={false}>
      <Tab className={classes.navTab} data-cy={name} label={`< ${label}  />`} />
    </Tabs>
  )
}

export default NavButton
