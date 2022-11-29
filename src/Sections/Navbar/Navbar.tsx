import React from "react";
import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import NSLinks from "../../Components/NavbarSection/NSlinks";

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
				<NSLinks linkNameProp={"Home"} />
				<NSLinks linkNameProp={"What is GPT?"} />
				<NSLinks linkNameProp={"Open Ai"} />
				<NSLinks linkNameProp={"Case Studies"} />
				<NSLinks linkNameProp={"Library"} />
			</NavbarLinksMiniContainer>
			<NavbarButtonMiniContainer></NavbarButtonMiniContainer>
		</NavbarContainer>
	);
}

export default Navbar;
