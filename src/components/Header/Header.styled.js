import styled from 'styled-components/macro';

export const HeaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

export const Logo = styled.h1`
  color: #e94746;
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 470px){
    font-size: 18px;
  }
`;

export const User = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  @media (max-width: 470px){
    gap: 20px;
  }
`;

export const Status = styled.div`
  cursor: pointer;
`;

export const Name = styled.div`
  color: gray;
  text-decoration: underline;
  cursor: pointer;
  
  @media (max-width: 470px){
    font-size: 12px;
  }
`;

export const Line = styled.hr`
  border: none; 
  background-color: red; 
  color: red; 
  height: 2px;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;

  @media (max-width: 470px){
    font-size: 12px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
  padding: 0px 10px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  padding: 0px 10px;

`;

export const AddAdminButton = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 13px;
  border: none;
  background-color: red;
  cursor: pointer;

  @media (max-width: 470px){
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 8px;
  }
`;

export const LanguageButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border: none;
  background-color: inherit;
  color: ${(props => props.disabled ? 'gray' : 'red')};
  cursor: pointer;

  &:hover{
    color: black;
  }
  @media (max-width: 470px){
    font-size: 12px;
  }
`;

export const LanguageComponent = styled.div`
  @media (max-width: 470px){
    flex-direction: column;
  }
`;