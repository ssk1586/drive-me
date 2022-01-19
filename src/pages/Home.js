import React from 'react'
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import UserCategory from '../components/UserCategory/UserCategory';

function Home() {
  return (
    <>
      <MenuComponent>
        <SideBarMenu />
        <UserCategory />
      </MenuComponent>
    </>
  );
};

export default Home;
