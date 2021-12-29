import styled from 'styled-components/macro';

export const CategoryComponent = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
	margin-top: 20px;
`;

export const Category = styled.button`
	cursor: pointer;
	padding: 10px 150px;
	border-radius: 20px;
	border: 2px solid red;
	color: ${(props) => (props.text)};
	background-color: ${(props) => (props.color)};
`;

export const TabShift = styled.div`
	margin-left: -70px;
`;