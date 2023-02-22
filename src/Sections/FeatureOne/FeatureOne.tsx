import React from "react";
import styled from "styled-components";

import Line from "../../Components/Line/Line";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";

const FeatureOne = () => {
	return (
		<MainContainer.MainContainer>
			<MainContainer.MiniTopContainer>
				<Line variant={"featureOne"} />
				<Heading headingTitleProp={"What is GPT-3"} variant={"featureOneWhite"} />
				<Paragraph
					contentProp={
						"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
					}
					variant={"featureOne"}
				/>
			</MainContainer.MiniTopContainer>
			<MainContainer.MiniCenterContainer>
				<Heading
					headingTitleProp={"The possibilities are beyond your imagination"}
					variant={"featureOneRainbow"}
				/>
				<Paragraph contentProp={"Explore The Library"} variant={"featureOneCenter"} />
			</MainContainer.MiniCenterContainer>
			<MainContainer.MiniBottomContainer.MainContainer>
				<MainContainer.MiniBottomContainer.MiniContainer>
					<Line variant={"featureOne"} />
					<Heading headingTitleProp={"Chatbots"} variant={"featureOneWhite"} />
					<Paragraph
						contentProp={
							"We so opinion friends me message as delight. Whole front do of plate heard oh ought."
						}
						variant={"featureOne"}
					/>
				</MainContainer.MiniBottomContainer.MiniContainer>
				<MainContainer.MiniBottomContainer.MiniContainer>
					<Line variant={"featureOne"} />
					<Heading headingTitleProp={"Knowledgebase"} variant={"featureOneWhite"} />
					<Paragraph
						contentProp={
							"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
						}
						variant={"featureOne"}
					/>
				</MainContainer.MiniBottomContainer.MiniContainer>
				<MainContainer.MiniBottomContainer.MiniContainer>
					<Line variant={"featureOne"} />
					<Heading headingTitleProp={"Education"} variant={"featureOneWhite"} />
					<Paragraph
						contentProp={
							"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
						}
						variant={"featureOne"}
					/>
				</MainContainer.MiniBottomContainer.MiniContainer>
			</MainContainer.MiniBottomContainer.MainContainer>
		</MainContainer.MainContainer>
	);
};

const MainContainer = {
	MainContainer: styled.section`
		background-image: radial-gradient(
				ellipse at top left,
				rgba(15, 66, 121, 1) 5%,
				rgba(15, 66, 121, 0) 20%
			),
			radial-gradient(
				ellipse at bottom right,
				rgba(27, 120, 222, 0.8) 0%,
				rgba(27, 120, 222, 0) 25%
			);
		background-color: #042c54;
		background-size: cover;
		background-repeat: no-repeat;

		height: 695px;
		width: 100%;

		padding: 3.5% 3%;

		filter: blur(1px);
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	`,
	MiniTopContainer: styled.div`
		/* background-color: red; */
		width: 100%;
		height: 33%;

		display: grid;
		grid-template-columns: 25% 75%;
		grid-template-rows: 10% 90%;
		grid-template-areas: "line ." "heading paragraph";
	`,
	MiniCenterContainer: styled.div`
		/* background-color: green; */
		width: 100%;
		height: 33%;

		display: flex;
		justify-content: space-between;
	`,
	MiniBottomContainer: {
		MainContainer: styled.div`
			/* background-color: orange; */
			width: 100%;
			height: 33%;
			display: flex;
			justify-content: space-between;
		`,
		MiniContainer: styled.div`
			/* background-color: red; */
			height: 100%;
			width: 30%;
		`,
	},
};

export default FeatureOne;
