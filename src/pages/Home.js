import React from 'react'
import Header from '../components/Header/Header';
import AddAdminPopUp from '../components/shared/AddAdminPopUp/AddAdminPopUp';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';

function Home() {
  return (
    <>
      <AddAdminPopUp/>
      <Header />
      <SideBarMenu />
    </>
  );
};

export default Home;
