import DesktopNavTab from '../components/navigation/DesktopNavTab'
import tabs from '../assets/data/tabs'
import MobileNavTab from '../components/navigation/MobileNavTab'

const navbarHelper = {
  getTabs(mobile) {
    if (mobile === true) {
      const mobileNav = tabs.Mobile.map((tab, index) => {
        return <MobileNavTab key={index} name={tab.name} label={tab.label} />
      })

      return mobileNav
    } else {
      const tabListLeft = tabs.Left.map((tab, index) => {
        return <DesktopNavTab key={index} name={tab.name} label={tab.label} />
      })
      const tabListRight = tabs.Right.map((tab, index) => {
        return <DesktopNavTab key={index} name={tab.name} label={tab.label} />
      })

      return { leftTabs: tabListLeft, rightTabs: tabListRight }
    }
  },
}

export default navbarHelper
