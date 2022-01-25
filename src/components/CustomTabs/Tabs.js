import { useState } from "react";
import { CustomTabs, Tab, TabPanel } from "./CustomTabs";

import {
  TabsContainer, TabPanelContainer
} from './CustomTabs.styled';

import {
  Content
} from '../UserCategory/UserCategory.styled';


export default function Tabs({labels, items}) {

  const [activeTab, setActiveTab] = useState(2);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <Content>
      <TabsContainer>
        <CustomTabs selectedTab={activeTab} onChange={handleChange}>
          {labels.map((item, index) => {
            return (
              <Tab key={index} value={index} label={item}></Tab>
            )
          })}
        </CustomTabs>
      </TabsContainer>

      <TabPanelContainer>
        {items.map((item, index) => {
          return (
            <TabPanel key={index} value={activeTab} selectedIndex={index}>{item}</TabPanel>
          )
        })}
      </TabPanelContainer>
    </Content>
  );
}
