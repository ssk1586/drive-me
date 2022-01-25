import React from "react";
import { useTranslation } from "react-i18next";

import {
  TabHeaderContainer,
  StylizedTab,
  StyledTabPanel,
  TabsHolder,
} from "./CustomTabs.styled";

export const Tab = ({ label, active, onClick }) => {
  const { t } = useTranslation();

  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
    >
      {t(label)}
      
    </StylizedTab>
  );
};

export const CustomTabs = ({ selectedTab, onChange, children }) => {
 
  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      active: child.props.value === selectedTab,
      onClick: handleClick
    });
  });

  return (
    <TabHeaderContainer>
      <TabsHolder>{tabs}</TabsHolder>
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};
 