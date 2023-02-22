import React from "react";
import styled from "styled-components";
import Links from "../Links/Links";

type FooterLinksProps = {
	listTitle: string;
	listOfLinkNames: string[];
	variant?: string;
};

type FooterStyledProps = {
	variant: string;
};

const FooterLinks = (props: FooterLinksProps) => {
	const { listTitle, listOfLinkNames, variant = "default" } = props;

	const createList = listOfLinkNames.map((currLink, index) => {
		return <Links key={currLink + index} linkNameProp={currLink} variant={"footerLinks"} />;
	});

	return (
		<FL.Main variant={variant}>
			<FL.Title variant={variant}>{listTitle}</FL.Title>
			<FL.Links variant={variant}>{createList}</FL.Links>
		</FL.Main>
	);
};

const FL = {
	Main: styled.div<FooterStyledProps>`
		/* background: grey; */
		height: fit-content;
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		row-gap: 36px;
	`,
	Title: styled.div<FooterStyledProps>`
		/* background: blue; */
		width: 100%;
		height: 20%;
		text-align: center;
		color: white;
		font-size: 22px;
	`,
	Links: styled.div<FooterStyledProps>`
		/* background: green; */
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;
		row-gap: 26px;
	`,
};

export default FooterLinks;
