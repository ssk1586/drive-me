import React from 'react';
import { isAdmin } from '../../services/userService';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
  CategoryComponent,
	Category,
	TabShift,
	Content,
} from './UserCategory.styled'
import Users from '../Users/Users';
import Admins from '../Admins/Admins';



const UserCategory = () =>  {

  const Tab = ({ children }) => {
		const { onClick, isActive } = useTabState();  
		return <Category
			onClick={onClick}
			color={isActive ? 'red' : 'white'}
			text={isActive ? 'white' : 'black'}>{children}
		</Category>;
	};
	
  const Panel = ({ children }) => {
  const isActive = usePanelState();    
  return isActive ? <span>{children}</span> : null;
  };

	return (
		<Tabs>
			<Content>
				<CategoryComponent>
					{isAdmin && <div><Tab>Адміністатори</Tab></div>}
					<TabShift><Tab>Водії</Tab></TabShift>
					<TabShift><Tab>Клієнти</Tab></TabShift>
				</CategoryComponent>

				<Panel><Admins/></Panel>
				<Panel><Users mode='driver'/></Panel>
				<Panel><Users mode='passenger'/></Panel>
			</Content>	
		</Tabs>
	);
};

export default UserCategory;
