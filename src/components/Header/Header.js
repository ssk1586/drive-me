import React from 'react'
import {
  HeaderComponent,
	Logo,
	User,
	Name,
	Status,
  Line
} from './Header.styled'

function Header() {
	return (
		<>
			<HeaderComponent>
				<Logo>MAGNET</Logo>
				<User>
					<Name>Sasha Sasha</Name>
					<Status>Log out</Status>
				</User>
			</HeaderComponent>
			<Line />
    </>
  )
};

export default Header;
