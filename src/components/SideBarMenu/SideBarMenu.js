import React from 'react'
import {
  MenuItems,
  MenuComponent,
  Content,
  SideBarButton,
  LinkTab,
} from './SideBarMenu.styled.js';

import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { Link } from 'react-router-dom';

const SideBarMenu = () => {
  
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
    <Tabs>
      {/* <MenuComponent> */}
      <MenuItems>
        <Tab><LinkTab to='/'>Користувачі</LinkTab></Tab>
        <Tab><LinkTab to='/'>Зворотній</LinkTab></Tab>
        <Tab><LinkTab to='/'>Фінансові запити</LinkTab></Tab>
        <Tab><LinkTab to='/'>Налаштування</LinkTab></Tab>
      </MenuItems>
      
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
      <Panel></Panel>
      {/* </MenuComponent>	 */}
    </Tabs>
  );
};

export default SideBarMenu;
