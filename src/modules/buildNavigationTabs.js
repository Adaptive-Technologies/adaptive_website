const buildNavigationTabs = (tabs, Component) => {
  const navTabs = tabs.map((tab, index) => {
    const props = {
      key: index,
      name: tab.name,
      label: tab.label,
    }

    return <Component {...props} />
  })

  return navTabs
}

export default buildNavigationTabs
