import NavButton from '../components/navigation/NavButton';
import tabs from '../assets/data/tabs';
import NavTab from '../components/navigation/NavTab';

const navbarHelper = {
  navigation(mobile) {
    if (mobile === true) {
      const mobileNav = tabs.Mobile.map((tab, index) => {
        return <NavTab value={index} name={tab.name} label={tab.label} />;
      });

      return mobileNav;
    } else {
      const tabListLeft = tabs.Left.map((tab, index) => {
        return (
          <NavButton
            value={index}
            key={index}
            index={tab.key}
            name={tab.name}
            label={tab.label}
          />
        );
      });
      const tabListRight = tabs.Right.map((tab, index) => {
        return (
          <NavButton
            value={index}
            key={index}
            index={tab.key}
            name={tab.name}
            label={tab.label}
          />
        );
      });

      return { tabListLeft, tabListRight };
    }
  },
};

export default navbarHelper;
