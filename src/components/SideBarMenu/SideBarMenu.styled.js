import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const MenuItems = styled.div`
  font-weight: 500;
  border-right: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 200px;

  @media (max-width: 480px){
    width: 100%;
    border:none;
    font-size: 10px;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid red;
  }
`;

export const MenuComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 50px;

  @media (max-width:470px){
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
`;

export const Content = styled.div`
  width: 100%;
`;

export const LinkTab = styled(Link)`
  color: inherit;
  text-decoration: none;

  @media (max-width: 480px){
    font-size: 14px;
  }
`;

export const SideBarButton = styled.button`
  border: none;
  background-color: ${(props) => (props.color)};
  color: ${(props) => (props.text)};
  padding: 12px;
  font-size: 16px;
  border-radius: 15px 0px 0px 15px;

  @media (max-width: 480px){
    border-radius: 15px;
  }
`;

