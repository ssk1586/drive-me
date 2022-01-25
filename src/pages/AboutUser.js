import React from 'react'
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import { MenuComponent } from '../components/SideBarMenu/SideBarMenu.styled';
import Tabs from '../components/CustomTabs/Tabs';
import UserInformation from '../components/UserInformation/UserInformation';
import UserFeedbacks from '../components/UserFeedbacks/UserFeedbacks';
import TripTable from '../components/TripTable/TripTable';
import UserTransactions from '../components/UserTransactions/UserTransactions';



function AboutUser() {
	return (
		<>
			<MenuComponent>
				<SideBarMenu />
				<Tabs
					labels={['Загальна інформація', 'Відгуки', 'Поїздки', 'Транзакції', 'Реферальна система']}
					items={[<UserInformation />, <UserFeedbacks />, <TripTable />, <UserTransactions />, '5']}
				/>
			</MenuComponent>
		</>
	);
}

export default AboutUser
