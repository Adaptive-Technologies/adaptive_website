import tabs from '../assets/data/tabs'
import NavTab from '../components/header/navbar/navTabs/NavTab'

const navbarHelper = {
  buildTabs() {
    const navTabs = tabs.map((tab, index) => {
      const props = {
        key: index,
        name: tab.name,
        label: tab.label,
      }
        return <NavTab {...props} />
    })

    return navTabs
  },
}

export default navbarHelper
