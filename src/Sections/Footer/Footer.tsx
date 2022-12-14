import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import FooterLinks from "../../Components/FooterLinks/FooterLinks";
import Heading from "../../Components/Heading/Heading";
import Logo from "../../Components/Logo/Logo";
import Paragraph from "../../Components/Paragraph/Paragraph";

const Footer = () => {
	return (
		<F.mainContainer>
			<F.miniTopContainer>
				<Heading
					headingTitleProp={"Do you want to step into the future before others"}
					variant={"footerMain"}
				/>
				<Button buttonNameProp={"Request Early Access"} variant={"footerRequest"} />
			</F.miniTopContainer>
			<F.miniBottomContainer.main>
				<F.miniBottomContainer.logo>
					<Logo logoNameProp={"GPT-3"} variant={"footerStyle"} />
					<Paragraph
						contentProp={"Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved"}
						variant={"footerLogoDesc"}
					/>
				</F.miniBottomContainer.logo>
				<F.miniBottomContainer.links>
					<FooterLinks
						listTitle={"Links"}
						listOfLinkNames={["Overons", "Social", "Media", "Counters", "Contact"]}
					/>
					<FooterLinks
						listTitle={"Company"}
						listOfLinkNames={["Terms & Conditions", "Privacy Policy", "Contact"]}
					/>
					<FooterLinks
						listTitle={"Get In Touch"}
						listOfLinkNames={["Crechterwoord K12 182 DK Alknjkcb", "085-132567", "info@payme.net"]}
					/>
				</F.miniBottomContainer.links>
			</F.miniBottomContainer.main>
		</F.mainContainer>
	);
};

const F = {
	mainContainer: styled.section`
		background: #031b34;
		height: 950px;
		width: 100%;

		display: flex;
		flex-direction: column;
	`,
	miniTopContainer: styled.aside`
		/* background: purple; */
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`,
	miniBottomContainer: {
		main: styled.aside`
			/* background: pink; */
			height: 40%;
			display: flex;
		`,
		logo: styled.div`
			/* background: red; */
			height: 100%;
			width: 30%;

			display: flex;
			flex-direction: column;
			align-items: center;
		`,
		links: styled.div`
			/* background: orange; */
			height: 100%;
			width: 70%;

			display: flex;

			align-items: flex-start;
			justify-content: flex-start;
			column-gap: 100px;
		`,
	},
};

export default Footer;
