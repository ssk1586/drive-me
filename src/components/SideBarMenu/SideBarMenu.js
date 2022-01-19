import React from 'react'
import {
  MenuItems,
  SideBarButton,
  LinkTab,
} from './SideBarMenu.styled.js';

import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { useTranslation } from "react-i18next";

const SideBarMenu = () => {

  const { t } = useTranslation();

  const Tab = ({ children }) => {
		const { onClick, isActive } = useTabState();  
		return <SideBarButton
			onClick={onClick}
			color={isActive ? 'red' : 'white'}
			text={isActive ? 'white' : 'black'}>{children}
		</SideBarButton>;
	};
	
  const Panel = ({ children }) => {
  const isActive = usePanelState();    
  return isActive ? <>{children}</> : null;
  };

  return (
    <>
      <Tabs>
        <MenuItems>
          <Tab><LinkTab to='/'>{t('user')}</LinkTab></Tab>
          <Tab><LinkTab to='/'>{t('reverse')}</LinkTab></Tab>
          <Tab><LinkTab to='/'>{t('financeReq')}</LinkTab></Tab>
          <Tab><LinkTab to='/settings'>{t('setting')}</LinkTab></Tab>
        </MenuItems>
      
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
      </Tabs>
    </>
  );
};

export default SideBarMenu;
