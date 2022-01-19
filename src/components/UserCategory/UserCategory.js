import React from 'react';
import { isAdmin } from '../../services/userService';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
  CategoryComponent,
	Category,
	TabShift,
	Content,
	FirstTab,
	Tables,
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
		<Content >
			<Tabs>
			
				<CategoryComponent >
					<FirstTab>{isAdmin && <div><Tab>{t('admin')}</Tab></div>}</FirstTab>
					<TabShift><Tab>{t('driver')}</Tab></TabShift>
					<TabShift><Tab>{t('client')}</Tab></TabShift>
				</CategoryComponent>

				<Tables>
				<Panel value={1}><Admins /></Panel>
				<Panel value={2}><Users mode='driver' /></Panel>
				<Panel value={3}><Users mode='passenger' /></Panel>
				</Tables>
			</Tabs>
		</Content>
	);
};

export default UserCategory;
