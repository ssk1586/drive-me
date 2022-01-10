import React from 'react'
import Header from '../components/Header/Header';
import AddAdminPopUp from '../components/shared/AddAdminPopUp/AddAdminPopUp';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import UserCategory from '../components/UserCategory/UserCategory';

function Home() {
  return (
    <>
      <AddAdminPopUp />
      <Header />
      <MenuComponent>
        <SideBarMenu />
        <UserCategory />
      </MenuComponent>
    </>
  );
};

export default Home;
