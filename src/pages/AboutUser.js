import React from 'react'
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import UserInformationCategory from '../components/UserInformationCategory/UserInformationCategory';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';

function AboutUser() {
	return (
		<>
			<MenuComponent>
				<SideBarMenu />
				<UserInformationCategory/>
			</MenuComponent>
		</>
	);
}

export default AboutUser
