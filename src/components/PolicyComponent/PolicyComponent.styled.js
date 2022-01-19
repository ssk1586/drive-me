import styled from "styled-components/macro";

export const PolicyComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const EditorContainer = styled.div`
  margin: 30px 50px;
`;

export const PolicyTabs = styled.div`
  @media (max-width: 670px){
}
`;

export const PolicyTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
	margin-top: 20px;
  gap: 50px;

  @media (max-width: 670px){
    gap: 10px;
    padding: 0px 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  background-color: red;
  color: white;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;