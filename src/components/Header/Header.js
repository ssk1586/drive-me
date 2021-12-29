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
import Cookies from 'js-cookie';


function Header() {
	const navigate = useNavigate();

	const data = Cookies.get('user')
	
	const logOut = () => {
		Cookies.remove('user');
		Cookies.remove('accessToken');
		Cookies.remove('refreshToken');
		navigate('/signIn')
	};

	return (
		<>
			<HeaderComponent>
				<Logo>MAGNET</Logo>
				<User>
					<Name>{data.role}</Name>
					<Button onClick={() => logOut()}>Log out</Button>
				</User>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
