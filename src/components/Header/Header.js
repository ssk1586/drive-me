import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setPopup } from '../../redux/slices/PopupSlice/PopupSlice'
import { setLanguage } from '../../redux/slices/LanguageSlice/LanguageSlice'
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
	LanguageButton,
	LanguageComponent,
} from './Header.styled'
import Cookies from 'js-cookie';
import { deleteCookies } from '../../services/userService';
import { useTranslation } from "react-i18next";
import { getLanguageValue } from '../../redux/slices/LanguageSlice/LanguageSlice'



function Header() {

	const dispatch = useDispatch();
	const data = JSON.parse(Cookies.get('user'))
	const { t, i18n } = useTranslation();
	
	const language = useSelector(getLanguageValue)

	const logOut = () => {
		deleteCookies();
		window.location.href = '/signIn';
	};

	const handlePopup = () => {
		dispatch(setPopup())
	}
	
	const handleOnclick = (e) => {
		i18n.changeLanguage(e.target.value)
		dispatch(setLanguage(e.target.value))
	};

	return (
		<>
			<HeaderComponent>
				
				<HeaderSection>
					<Logo>MAGNET</Logo>
					<User>
						<LanguageComponent>
							<LanguageButton value='en' disabled={language === 'en' ? true : false} onClick={handleOnclick}>
								English
							</LanguageButton>
							<LanguageButton value='ua' disabled={language === 'ua' ? true : false} onClick={handleOnclick}>
								Українська
							</LanguageButton>
						</LanguageComponent>

						<Name>{data.user.role}</Name>
							<Button onClick={() => logOut()}>{t('logOut')}</Button>
					</User>
				</HeaderSection>

				<ButtonSection>
					{isAdmin && <AddAdminButton
						onClick={() => handlePopup()}
					>+ {t('addAdmin')}</AddAdminButton>}
				</ButtonSection>
			</HeaderComponent>
			<Line />
		</>
	);
};

export default Header;
