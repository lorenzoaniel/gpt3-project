import React from "react";
import styled from "styled-components";

import Heading from "../../Components/Heading/Heading";
import Line from "../../Components/Line/Line";
import Paragraph from "../../Components/Paragraph/Paragraph";

const FeatureTwo = () => {
	return (
		<FT.mainContainer>
			<FT.miniLeftContainer>
				<Heading
					headingTitleProp={
						"The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen."
					}
					variant={"featureTwoRainbow"}
				/>
				<Paragraph
					contentProp={"Request Early Access to Get Started"}
					variant={"featureTwoOrange"}
				/>
			</FT.miniLeftContainer>
			<FT.miniRightContainer.mainContainer>
				<FT.miniRightContainer.miniContainer>
					<Line variant={"featureTwo"} />
					<Heading
						headingTitleProp={"Improving end distrusts instantly"}
						variant={"featureTwoWhite"}
					/>
					<Paragraph
						contentProp={
							"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
						}
						variant={"featureTwoLightBlue"}
					/>
				</FT.miniRightContainer.miniContainer>
				<FT.miniRightContainer.miniContainer>
					<Line variant={"featureTwo"} />
					<Heading headingTitleProp={"Become the tended active"} variant={"featureTwoWhite"} />
					<Paragraph
						contentProp={
							"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
						}
						variant={"featureTwoLightBlue"}
					/>
				</FT.miniRightContainer.miniContainer>
				<FT.miniRightContainer.miniContainer>
					<Line variant={"featureTwo"} />
					<Heading headingTitleProp={"Message or am nothing"} variant={"featureTwoWhite"} />
					<Paragraph
						contentProp={
							"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
						}
						variant={"featureTwoLightBlue"}
					/>
				</FT.miniRightContainer.miniContainer>
				<FT.miniRightContainer.miniContainer>
					<Line variant={"featureTwo"} />
					<Heading headingTitleProp={"Really boy law county"} variant={"featureTwoWhite"} />
					<Paragraph
						contentProp={
							"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
						}
						variant={"featureTwoLightBlue"}
					/>
				</FT.miniRightContainer.miniContainer>
			</FT.miniRightContainer.mainContainer>
		</FT.mainContainer>
	);
};

const FT = {
	mainContainer: styled.section`
		/* background-color: #00bfff; */
		height: 640px;
		width: 100%;

		display: flex;

		padding-top: 200px;
	`,
	miniLeftContainer: styled.div`
		/* background-color: orange; */
		height: 100%;
		width: 45%;
	`,
	miniRightContainer: {
		mainContainer: styled.div`
			/* background-color: red; */
			height: 100%;
			width: 55%;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		`,
		miniContainer: styled.div`
			/* background-color: green; */
			height: 92px;
			width: 100%;

			display: grid;
			grid-template-columns: 25% 75%;
			grid-template-rows: 10% 90%;
			grid-template-areas: "line paragraph" "heading paragraph";
		`,
	},
};

export default FeatureTwo;
