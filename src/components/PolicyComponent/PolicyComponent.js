import React, { useEffect, useState } from 'react'
import { fetchPolicy } from '../../services/API'

import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import {
	Category,
} from '../UserCategory/UserCategory.styled';

import {
  PolicyTabs,
  PolicyTabsContainer,
} from './PolicyComponent.styled'

import EditorComponent from '../Editor/EditorComponent';


function PoliceComponent() {
  const [settingsInfo, setSettingsInfo] = useState({
		policy: null,
		terms: null,
		questions: null
  });

  useEffect(() => {
    fetchPolicy('policy').then(data => setSettingsInfo((prev) => ({ ...prev, policy: data.text })))
    fetchPolicy('terms').then(data => setSettingsInfo((prev) => ({ ...prev, terms: data.text })))
    fetchPolicy('questions').then(data => setSettingsInfo((prev) => ({...prev, questions: data.text })))
  }, [])

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
      <PolicyTabsContainer>
        <PolicyTabs><Tab>Правила користування</Tab></PolicyTabs>
        <PolicyTabs><Tab>Правила конфіденційності</Tab></PolicyTabs>
        <PolicyTabs><Tab>Запитання і відповіді</Tab></PolicyTabs>
      </PolicyTabsContainer>

      <Panel>{settingsInfo !== null && < EditorComponent data={settingsInfo.policy} name={'policy'} />}</Panel>
      <Panel>{settingsInfo !== null && < EditorComponent data={settingsInfo.terms} name={'terms'} />}</Panel>
      <Panel>{settingsInfo !== null && < EditorComponent data={settingsInfo.questions} name={'questions'} />}</Panel>
    </Tabs>
  );
}

export default PoliceComponent
