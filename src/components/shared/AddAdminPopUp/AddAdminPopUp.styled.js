import styled from 'styled-components/macro';

export const Overlay = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
	display: ${(props => (props.display))};
`;

export const ContentComponent = styled.div`
	width: 600px;
	background-color: white;
	border-radius: 10px;
	padding: 30px;
	box-shadow: 0 0 15px rgba(0,0,0,0.7);
`;

export const AddButton = styled.button`
	min-width: 100px;
	padding: 10px;
	background-color: red;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

export const CanselButton = styled.button`
	min-width: 100px;
	padding: 10px;
	background-color: white;
	color: red;
	border: none;
	border-radius: 5px;
	box-shadow: 0 0 3px rgba(0,0,0,0.5);
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 25px;
	justify-content: center;
`;

export const Input = styled.input`
  min-width: 400px;
  min-height: 35px;
  border: 2px solid red;
  border-radius: 7px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 0px 0px 25px 0px;
`;
