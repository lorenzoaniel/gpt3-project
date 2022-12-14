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
		<FL.main variant={variant}>
			<FL.title variant={variant}>{listTitle}</FL.title>
			<FL.links variant={variant}>{createList}</FL.links>
		</FL.main>
	);
};

const FL = {
	main: styled.div<FooterStyledProps>`
		/* background: grey; */
		height: fit-content;
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		row-gap: 36px;
	`,
	title: styled.div<FooterStyledProps>`
		/* background: blue; */
		width: 100%;
		height: 20%;
		text-align: center;
		color: white;
		font-size: 22px;
	`,
	links: styled.div<FooterStyledProps>`
		/* background: green; */
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;
		row-gap: 26px;
	`,
};

export default FooterLinks;
