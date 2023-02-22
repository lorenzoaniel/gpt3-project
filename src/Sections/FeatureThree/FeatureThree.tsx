import React from "react";
import styled from "styled-components";

import Image from "../../Components/Image/Image";

import featureImg from "../../Assets/Img/FeatureThree/FeatureImage.png";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Heading from "../../Components/Heading/Heading";

const FeatureThree = () => {
	return (
		<FT.MainContainer>
			<FT.MiniLeftContainer>
				<Image srcProp={featureImg} />
			</FT.MiniLeftContainer>
			<FT.MiniRightContainer>
				<Paragraph
					contentProp={"Request Early Access to Get Started"}
					variant={"featureThreeLightBlue"}
				/>
				<Heading
					headingTitleProp={"The possibilities are beyond your imagination"}
					variant={"featureThreeRainbow"}
				/>
				<Paragraph
					contentProp={
						"Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
					}
					variant={"featureThree"}
				/>
				<Paragraph
					contentProp={"Request Early Access to Get Started"}
					variant={"featureThreeOrange"}
				/>
			</FT.MiniRightContainer>
		</FT.MainContainer>
	);
};

const FT = {
	MainContainer: styled.section`
		/* background-color: black; */
		height: 750px;
		width: 100%;

		display: flex;

		padding-top: 100px;
	`,
	MiniLeftContainer: styled.aside`
		/* background-color: orange; */
		height: 100%;
		width: 55%;

		display: flex;
		justify-content: center;
		align-items: center;
	`,
	MiniRightContainer: styled.aside`
		/* background-color: red; */
		height: 100%;
		width: 45%;

		padding-top: 250px;
		display: flex;
		flex-direction: column;
		row-gap: 5%;
	`,
};

export default FeatureThree;
