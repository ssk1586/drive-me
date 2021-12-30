import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setPopup } from '../../redux/slices/PopupSlice/PopupSlice'

import {
  HeaderComponent,
	Logo,
	User,
	// Name,
	Line,
	Button,
	HeaderSection,
	ButtonSection,
	AddAdminButton,
} from './Header.styled'
import Cookies from 'js-cookie';


function Header() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const data = Cookies.get('user')
	
	const logOut = () => {
		Cookies.remove('user');
		Cookies.remove('accessToken');
		Cookies.remove('refreshToken');
		navigate('/signIn')
	};

	const handlePopup = () => {
		dispatch(setPopup())
	}

	return (
		<>
			<HeaderComponent>
				<HeaderSection>
				<Logo>MAGNET</Logo>
				<User>
					<Button onClick={() => logOut()}>Log out</Button>
				</User>
				</HeaderSection>

				<ButtonSection>
					<AddAdminButton onClick={() => handlePopup()}>+ Додати адміна</AddAdminButton>
				</ButtonSection>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
