import React from 'react'
import { Tab, Tabs } from '@material-ui/core'

const NavTab = ({ name, label }) => {
  return (
    <Tabs value={false}>
      <Tab data-cy={name} label={`< ${label} />`} />
    </Tabs>
  )
}

export default NavTab
