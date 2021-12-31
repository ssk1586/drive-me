import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setPopup } from '../../redux/slices/PopupSlice/PopupSlice'
import { isAdmin } from '../../services/userService';

import {
  HeaderComponent,
	Logo,
	User,
	Name,
	Line,
	Button,
	HeaderSection,
	ButtonSection,
	AddAdminButton,
} from './Header.styled'
import Cookies from 'js-cookie';
import { deleteCookies } from '../../services/userService';



function Header() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const data = JSON.parse(Cookies.get('user'))
	
	const logOut = () => {
		deleteCookies();
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
						<Name>{data.user.role}</Name>
					<Button onClick={() => logOut()}>Log out</Button>
				</User>
				</HeaderSection>

				<ButtonSection>
					{isAdmin && <AddAdminButton
						onClick={() => handlePopup()}
					>+ Додати адміна</AddAdminButton>}
				</ButtonSection>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
