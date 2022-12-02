import React from "react";
import styled from "styled-components";

import Image from "../../Components/Image/Image";

import HeaderImg from "../../Assets/Img/Header/HeaderImg.png";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeftHalfMiniContainer></HeaderLeftHalfMiniContainer>
			<HeaderRightHalfMiniContainer>
				<Image srcProp={HeaderImg} variant={"headerStyle"} />
			</HeaderRightHalfMiniContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.section`
	background-color: red;
	height: 705px;
	width: 100%;

	display: flex;
`;

const HeaderLeftHalfMiniContainer = styled.aside`
	background-color: green;
	height: 80%;
	width: 48%;

	align-self: center;
`;

const HeaderRightHalfMiniContainer = styled.aside`
	background-color: orange;
	height: 100%;
	width: 52%;

	display: flex;
	align-items: center;
`;

export default Header;
