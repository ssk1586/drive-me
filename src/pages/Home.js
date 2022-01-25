import React from 'react'
import Admins from '../components/Admins/Admins';
import Tabs from '../components/CustomTabs/Tabs';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import Users from '../components/Users/Users';
import { isAdmin } from '../services/userService';

function Home() {
  return (
    <>
      <MenuComponent>
        <SideBarMenu />
        <Tabs
          labels={[isAdmin && 'admin', 'driver', 'client']}
          items={[isAdmin && <Admins />, <Users mode='driver' />, <Users mode='passenger' />]}
        >
        </Tabs>
      </MenuComponent>
    </>
  );
};

export default Home;
