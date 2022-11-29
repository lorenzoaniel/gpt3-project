import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import Links from "../../Components/Links/Links";

const NavbarContainer = styled.div`
	background-color: red;
	height: 58px;
	width: 100%;

	display: flex;
`;

const NavbarLogoMiniContainer = styled.div``;

const NavbarLinksMiniContainer = styled.div`
	display: flex;
`;

const NavbarButtonMiniContainer = styled.div``;

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
			<NavbarButtonMiniContainer></NavbarButtonMiniContainer>
		</NavbarContainer>
	);
}

export default Navbar;
