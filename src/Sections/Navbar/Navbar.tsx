import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import Links from "../../Components/Links/Links";
import Button from "../../Components/Button/Button";

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
				<Button buttonNameProp={"Sign in"} variant={"navStyleTransparent"} />
				<Button buttonNameProp={"Sign up"} variant={"navStyle"} />
			</NavbarButtonMiniContainer>
		</NavbarContainer>
	);
}

const NavbarContainer = styled.nav`
	height: 58px;
	width: 100%;

	display: flex;
	margin-top: 55px;
`;

const NavbarLogoMiniContainer = styled.div`
	height: 100%;
	width: 10%;
`;

const NavbarLinksMiniContainer = styled.div`
	height: 100%;
	width: 50%;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const NavbarButtonMiniContainer = styled.div`
	height: 100%;
	width: 40%;

	display: flex;
	justify-content: flex-end;
`;

export default Navbar;
