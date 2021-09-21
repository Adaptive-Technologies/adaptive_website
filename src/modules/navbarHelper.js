import CustomButton from '../components/CustomButton';
import tabs from '../assets/data/tabs';
import NavTab from '../components/navigation/NavTab';

const navbarHelper = {
  navigation(mobile) {
    if (mobile === true) {
      const mobileNav = tabs.Mobile.map((tab) => {
        return <NavTab name={tab.name} label={tab.label} />;
      });

      return mobileNav;
    } else {
    }

    const tabListLeft = tabs.Left.map((tab) => {
      return <CustomButton name={tab.name} label={tab.label} />;
    });
    const tabListRight = tabs.Right.map((tab) => {
      return <CustomButton name={tab.name} label={tab.label} />;
    });

    return { tabListLeft, tabListRight };
  },
};

export default navbarHelper;
