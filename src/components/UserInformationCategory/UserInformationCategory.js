import React from 'react';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
  CategoryComponent,
	Category,
	TabShift,
	Content,
} from '../UserCategory/UserCategory.styled'
import {
  Button,
  Component,
  ButtonComponent,
} from './UserInformationCategory.styled'
import UserInformation from '../UserInformation/UserInformation';


const UserInformationCategory = () =>  {

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
    <Component>
      <ButtonComponent>
        <Button>Верифікувати</Button>
        <Button>Відхилити</Button>
        <Button>Видалити</Button>
        <Button>Заблокувати</Button>
      </ButtonComponent>
      <Tabs>
        <Content>
          <CategoryComponent>
            <Tab>Загальна інформація</Tab>
            <TabShift><Tab>Відгуки</Tab></TabShift>
            <TabShift><Tab>Поїздки</Tab></TabShift>
            <TabShift><Tab>Реферальна система</Tab></TabShift>
          </CategoryComponent>

          <Panel><UserInformation/></Panel>
          <Panel>2</Panel>
          <Panel>3</Panel>
          <Panel>4</Panel>
          <Panel>5</Panel>
        </Content>
      </Tabs>
    </Component>
	);
};

export default UserInformationCategory;
