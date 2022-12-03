import React from "react";
import styled from "styled-components";

import Image from "../../Components/Image/Image";
import Heading from "../../Components/Heading/Heading";

import HeaderImg from "../../Assets/Img/Header/HeaderImg.png";
import Paragraph from "../../Components/Paragraph/Paragraph";
import InputBar from "../../Components/InputBar/InputBar";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeftHalfMiniContainer>
				<Heading
					headingTitleProp={"Let's Build Something amazing with GPT-3 OpenAI"}
					variant={"headerStyle"}
				/>
				<Paragraph
					contentProp={
						"Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
					}
					variant={"headerStyle"}
				/>
				<InputBar
					InputBarPlaceholderProp={"Your Email Address"}
					InputBarButtonTitleProp={"Get Started"}
					variant={"emailRegistrationStyle"}
				/>
			</HeaderLeftHalfMiniContainer>
			<HeaderRightHalfMiniContainer>
				<Image srcProp={HeaderImg} />
			</HeaderRightHalfMiniContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.section`
	/* background-color: red; */
	height: 770px;
	width: 100%;

	display: flex;
`;

const HeaderLeftHalfMiniContainer = styled.aside`
	/* background-color: green; */
	height: 80%;
	width: 49%;

	align-self: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const HeaderRightHalfMiniContainer = styled.aside`
	/* background-color: orange; */
	height: 100%;
	width: 51%;

	display: flex;
	align-items: center;
`;

export default Header;
