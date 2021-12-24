import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeaderComponent,
	Logo,
	User,
	Name,
	Line,
	Button,

} from './Header.styled'

function Header() {
	const navigate = useNavigate();

	const logOut = () => {
		localStorage.clear();
		navigate('/signIn')
	};

	return (
		<>
			<HeaderComponent>
				<Logo>MAGNET</Logo>
				<User>
					<Name>Sasha Sasha</Name>
					<Button onClick={() => logOut()}>Log out</Button>
				</User>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
