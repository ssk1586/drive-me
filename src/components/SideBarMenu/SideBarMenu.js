import React from 'react'
import {
  MenuItems,
  MenuComponent,
  Content,
  SideBarButton,
} from './SideBarMenu.styled.js';

import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import UserCategory from '../UserCategory/UserCategory';

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
			<MenuComponent>
				<MenuItems>
					<Tab>Користувачі</Tab>
					<Tab>Зворотній зв'язок</Tab>
          <Tab>Фінансові запити</Tab>
          <Tab>Налаштування</Tab>
        </MenuItems>
        <Content>
          <Panel><UserCategory/></Panel>
          <Panel>Panel 2</Panel>
          <Panel>Panel 3</Panel>
          <Panel>Panel 4</Panel>
        </Content>
			</MenuComponent>	
		</Tabs>
	);
};

export default SideBarMenu;
