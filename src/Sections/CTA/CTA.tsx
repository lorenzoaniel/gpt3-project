import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";

const CTA = () => {
	return (
		<C.mainContainer>
			<C.banner>
				<Paragraph contentProp={"Request Early Access to Get Started"} variant={"CTA"} />
				<Heading
					headingTitleProp={"Register today & start exploring the endless possibilities"}
					variant={"CTA"}
				/>
				<Button buttonNameProp={"Get Started"} variant={"CTA"} />
			</C.banner>
		</C.mainContainer>
	);
};

const C = {
	mainContainer: styled.section`
		/* background-color: black; */
		height: 500px;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
	`,
	banner: styled.div`
		height: 160px;
		background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
		border: 1px solid #000000;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10.7236px;

		display: grid;
		grid-template-columns: 60% 40%;
		grid-template-rows: 50% 50%;
		grid-template-areas: "paragraph button" "heading button";
		padding: 0 3%;
	`,
};

export default CTA;
