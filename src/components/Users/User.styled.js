import styled from "styled-components/macro";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 650px){
   
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: 2px solid red;

  @media (max-width: 650px){
    padding: 5px;
    font-size: 14px;
  }
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 650px){
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 10px;
  }
`;


export const PageComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

export const Multiselect = styled.select`
 	padding: 8px;
  border-radius: 10px;
  border: 2px solid red;

  @media (max-width: 650px){
    padding: 5px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
	background-color: inherit;
	border: none;
	cursor: pointer;

	&:hover {
		color: red;
	}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
