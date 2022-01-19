import React from 'react';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
  CategoryComponent,
	Category,
	TabShift,
	Content,
  FirstTab,
} from '../UserCategory/UserCategory.styled'
import {
  Button,
  Component,
  ButtonComponent,
} from './UserInformationCategory.styled'
import UserInformation from '../UserInformation/UserInformation';
import TripTable from '../TripTable/TripTable';
import UserFeedbacks from '../UserFeedbacks/UserFeedbacks';
import UserTransactions from '../UserTransactions/UserTransactions';


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
            <FirstTab><Tab>Загальна інформація</Tab></FirstTab>
            <TabShift><Tab>Відгуки</Tab></TabShift>
            <TabShift><Tab>Поїздки</Tab></TabShift>
            <TabShift><Tab>Транзакції</Tab></TabShift>
            <TabShift><Tab>Реферальна система</Tab></TabShift>
          </CategoryComponent>

          <Panel><UserInformation/></Panel>
          <Panel><UserFeedbacks/></Panel>
          <Panel><TripTable/></Panel>
          <Panel><UserTransactions/></Panel>
          <Panel>5</Panel>
          <Panel>6</Panel>
        </Content>
      </Tabs>
    </Component>
	);
};

export default UserInformationCategory;
