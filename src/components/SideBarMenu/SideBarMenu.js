import React from 'react'
import {
  MenuItems,
} from './SideBarMenu.styled.js';
import './SideBar.css';

import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

const SideBarMenu = () => {

  const { t } = useTranslation();

  return (
    <MenuItems>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('user')}</NavLink>
      <NavLink to='/error' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('reverse')}</NavLink>
      <NavLink to='/error' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('financeReq')}</NavLink>
      <NavLink to='/settings' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('setting')}</NavLink>
    </MenuItems>
  );
};

export default SideBarMenu;
