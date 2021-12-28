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

	const data = JSON.parse(localStorage.getItem('user'))
	const user = data.user
	
	const logOut = () => {
		localStorage.clear();
		navigate('/signIn')
	};

	return (
		<>
			<HeaderComponent>
				<Logo>MAGNET</Logo>
				<User>
					<Name>{user.role}</Name>
					<Button onClick={() => logOut()}>Log out</Button>
				</User>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
