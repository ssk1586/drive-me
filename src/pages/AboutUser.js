import React from 'react'
import AddAdminPopUp from '../components/shared/AddAdminPopUp/AddAdminPopUp';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import Header from '../components/Header/Header';
import UserInformationCategory from '../components/UserInformationCategory/UserInformationCategory';
import { Content } from '../components/UserInformationCategory/UserInformationCategory.styled';

function AboutUser() {
	return (
		<>
			<AddAdminPopUp/>
			<Header />
			<Content>
				<SideBarMenu />
				<UserInformationCategory/>
			</Content>
		</>
	);
}

export default AboutUser
