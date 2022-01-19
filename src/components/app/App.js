import './App.css';
import Routes from '../../config/Routes';
import React from 'react';
import Header from '../Header/Header';
import AddAdminPopUp from '../shared/AddAdminPopUp/AddAdminPopUp';
import { getCookies } from '../../services/userService'

function App() {
  return (
    <>
      <AddAdminPopUp/>
      {getCookies() ? <Header /> : ''}
      <Routes />
    </>
  );
}

export default App;
