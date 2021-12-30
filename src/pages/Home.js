import React from 'react'
import Header from '../components/Header/Header';
import AddAdminPopUp from '../components/shared/AddAdminPopUp/AddAdminPopUp';
import UserCategory from '../components/UserCategory/UserCategory';

function Home() {
  return (
    <>
      <AddAdminPopUp/>
      <Header /> 
      <UserCategory/>
    </>
  );
};

export default Home;
