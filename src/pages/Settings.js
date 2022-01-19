import React from 'react'
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import SettingsComponent from '../components/SettingsComponent/SettingsComponent';


const Settings = () => {
  return (
    <>
      <MenuComponent>
        <SideBarMenu />
        <SettingsComponent/>
      </MenuComponent>
    </>
  )
}

export default Settings
