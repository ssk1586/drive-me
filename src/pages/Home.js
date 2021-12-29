import React from 'react'
import Users from '../components/Users/Users';
import Header from '../components/Header/Header';
import UserCategory from '../components/UserCategory/UserCategory';

function Home() {
  return (
    <>
      <Header/>
      {/* <Users/> */}
        <UserCategory/>
    </>
  );
};

export default Home;
