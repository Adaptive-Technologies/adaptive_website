import DesktopNavTab from '../components/navigation/DesktopNavTab'
import tabs from '../assets/data/tabs'
import MobileNavTab from '../components/navigation/MobileNavTab'

const navbarHelper = {
  buildTabs(isMobile) {
    const navTabs = tabs.map((tab, index) => {
      const props = {
        key: index,
        name: tab.name,
        label: tab.label,
      }

      if (isMobile === true) {
        return <MobileNavTab {...props} />
      } else {
        return <DesktopNavTab {...props} />
      }
    })

    return navTabs
  },
}

export default navbarHelper
