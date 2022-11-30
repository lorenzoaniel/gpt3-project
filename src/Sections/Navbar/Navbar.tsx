import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import Links from "../../Components/Links/Links";
import Button from "../../Components/Button/Button";

const NavbarContainer = styled.div`
	background-color: red;
	height: 58px;
	width: 100%;

	display: flex;
`;

const NavbarLogoMiniContainer = styled.div`
	height: 100%;
	width: 10%;
`;

const NavbarLinksMiniContainer = styled.div`
	background-color: purple;
	height: 100%;
	width: 50%;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const NavbarButtonMiniContainer = styled.div`
	background-color: orange;
	height: 100%;
	width: 40%;

	display: flex;
	justify-content: flex-end;
`;

function Navbar() {
	return (
		<NavbarContainer>
			<NavbarLogoMiniContainer>
				<Logo logoNameProp={"GPT-3"} variant={"navStyle"} />
			</NavbarLogoMiniContainer>
			<NavbarLinksMiniContainer>
				<Links linkNameProp={"Home"} variant={"navStyle"} />
				<Links linkNameProp={"What is GPT?"} variant={"navStyle"} />
				<Links linkNameProp={"Open Ai"} variant={"navStyle"} />
				<Links linkNameProp={"Case Studies"} variant={"navStyle"} />
				<Links linkNameProp={"Library"} variant={"navStyle"} />
			</NavbarLinksMiniContainer>
			<NavbarButtonMiniContainer>
				<Button buttonNameProp={"Sign in"} variant={"navStyle"} />
				<Button buttonNameProp={"Sign up"} variant={"navStyle"} />
			</NavbarButtonMiniContainer>
		</NavbarContainer>
	);
}

export default Navbar;
