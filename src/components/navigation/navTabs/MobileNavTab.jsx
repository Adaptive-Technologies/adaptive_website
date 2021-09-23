import React from 'react'
import { Tab, Tabs } from '@mui/material'

const NavTab = ({ name, label }) => {
  return (
    <Tabs value={false}>
      <Tab data-cy={name} label={`< ${label} />`} />
    </Tabs>
  )
}

export default NavTab
