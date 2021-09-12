import React from "react";
import styled from "styled-components";


function Header() {

	return (
		<NavBar>
			<Logo>
				Job Scanner
			</Logo>
		</NavBar>
	);

}

const NavBar = styled.nav`
	height: 80px;
	background-color: #203040;
	display: flex;
	align-items: center;
`

const Logo = styled.span`
	padding-left: 2%;
	color: #D0DCE4;
	letter-spacing: 1px;
	font-weight: bold;
	font-size: 2vw;
	text-shadow: 1px 0 black;
	cursor: pointer;

`

export default Header;