import styled from 'styled-components/macro';

export const CategoryComponent = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
	margin-top: 20px;
	width: 100%;

	@media(max-width: 470px){
		flex-wrap	: wrap;
		border-top: 2px solid red;
		border-bottom: 2px solid red;
	}
`;

export const Category = styled.button`
	cursor: pointer;
	padding: 10px;
	width: 100%;
	border-radius: 20px;
	border: 2px solid red;
	color: ${(props) => (props.text)};
	background-color: ${(props) => (props.color)};
`;

export const TabShift = styled.div`
	margin-left: -10%;
	width: 50%;

	@media (max-width: 710px){
		width: 30%;
		margin: 0px;
		display: flex;
		gap: 10px;
		margin: 10px 0px;
	}
`;

export const FirstTab = styled.div`
	width: 50%;
	@media (max-width: 710px){
		width: 30%;	
		gap: 10px;
		margin: 10px 0px;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 50px;

	@media (max-width:470px){
		margin: 0;
	}
`;

export const Tables = styled.div`
	width: 100%;
`;