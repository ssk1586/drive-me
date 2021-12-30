import styled from "styled-components/macro";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: 2px solid red;
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;


export const PageComponent = styled.div`
  padding: 0px 50px;
`;

export const Multiselect = styled.select`
 	padding: 8px;
  border-radius: 10px;
  border: 2px solid red;
`;

export const Button = styled.button`
	background-color: inherit;
	border: none;
	cursor: pointer;

	&:hover {
		color: red;
	}
`;