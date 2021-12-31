import styled from 'styled-components/macro';

export const MenuItems = styled.div`
  font-weight: 500;
  border-right: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 200px;
`;

export const MenuComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  
`;

export const SideBarButton = styled.button`
  border: none;
  background-color: ${(props) => (props.color)};
  color: ${(props) => (props.text)};
  padding: 12px;
  font-size: 16px;
  border-radius: 15px 0px 0px 15px;
`;