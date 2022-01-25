import styled, { css } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button`
  
  color: black;
  width: 100%;
  padding: 10px 0px;
  border-radius: 25px;
  font-size: 1rem;
  background-color: transparent;
  border: 2px solid red;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: white;
      border: 2px solid red;
      background-color: red;
      font-weight: bold;
    `}

  @media (max-width: 470px){
    padding: 5px 0px;
    font-size: 14px;
  }
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media(max-width: 470px){
    flex-wrap: wrap;
  }
`;


export const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

export const TabPanelContainer = styled.div`
  height: 100%;
`;