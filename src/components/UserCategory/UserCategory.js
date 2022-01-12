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
import { useTranslation } from "react-i18next";



const UserCategory = () =>  {

	const { t } = useTranslation();

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
			<Content >
				<CategoryComponent >
					{isAdmin && <div><Tab>{t('admin')}</Tab></div>}
					<TabShift><Tab>{t('driver')}</Tab></TabShift>
					<TabShift><Tab>{t('client')}</Tab></TabShift>
				</CategoryComponent>

				<Panel value={1}><Admins/></Panel>
				<Panel value={2}><Users mode='driver'/></Panel>
				<Panel value={3}><Users mode='passenger'/></Panel>
			</Content>	
		</Tabs>
	);
};

export default UserCategory;
