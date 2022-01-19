import React from 'react'
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
	CategoryComponent,
	Category,
	TabShift,
	Content,
	FirstTab,
} from '../UserCategory/UserCategory.styled';

import PoliceComponent from '../PolicyComponent/PolicyComponent';
import PriceSettings from '../PriceSettings/PriceSettings';


const SettingsComponent = () => {

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
				<CategoryComponent >
					<FirstTab><Tab>Налаштування цін</Tab></FirstTab>
					<TabShift><Tab>Налаштування автомобілів</Tab></TabShift>
					<TabShift><Tab>Юридичні тексти</Tab></TabShift>
				</CategoryComponent>
					<Panel><PriceSettings/></Panel>
					<Panel>Налаштування автомобілів</Panel>
					<Panel>< PoliceComponent/></Panel>
				</Content>
		</Tabs>
	);
};

export default SettingsComponent;
