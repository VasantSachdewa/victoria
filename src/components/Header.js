import React from "react";
import styled from "styled-components";


function Header() {

	return (
		<NavBar>
			<Logo>
				Job Scanner
			</Logo>
			<LogInContainer>
				<button>Login</button>
			</LogInContainer>
		</NavBar>
	);

}

const NavBar = styled.nav`
	height: 80px;
	background-color: #203040;
	display: flex;
	align-items: center;
`

const Logo = styled.div`
	padding-left: 2%;
	color: #D0DCE4;
	letter-spacing: 1px;
	font-weight: bold;
	font-size: 2vw;
	text-shadow: 1px 0 black;
	cursor: pointer;
`

const LogInContainer = styled.div`
	position: absolute;
	right: 0;
	border-radius: 0.5rem;
	margin-right: 2%;
	border: transparent;

	button {
		padding: 6px 12px;
		right: 0;
		border-radius: 0.5rem;
		background-color: yellow;
		cursor: pointer;
		border: transparent;
	}
`


export default Header;