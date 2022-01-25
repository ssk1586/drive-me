import React from 'react'
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import Tabs from '../components/CustomTabs/Tabs';
import PriceSettings from '../components/PriceSettings/PriceSettings';
import PoliceComponent from '../components/PolicyComponent/PolicyComponent';

const Settings = () => {
  return (
    <>
      <MenuComponent>
        <SideBarMenu />
        <Tabs
          labels={['Налаштування цін', 'Налаштування автомобілів', 'Юридичні тексти']}
          items={[<PriceSettings />, 'Налаштування автомобілів', <PoliceComponent />]}
        />
      </MenuComponent>
    </>
  );
}

export default Settings
