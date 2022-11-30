import React from "react";
import styled from "styled-components";

type LinksProps = {
	linkNameProp?: string;
	variant: string;
};

type LinksStyledProps = {
	variant: string;
};

interface LinksVariantsType {
	LinksContainer: any;
}

const Links = (props: LinksProps) => {
	const { linkNameProp, variant } = props;

	return <LinksContainer variant={variant}>{linkNameProp}</LinksContainer>;
};

const LinksVariants: LinksVariantsType = {
	LinksContainer: {
		navStyle: {
			fontSize: "18px",
		},
	},
};

const LinksContainer = styled.a<LinksStyledProps>`
	font-size: ${(props) =>
		LinksVariants.LinksContainer[props.variant as keyof LinksVariantsType].fontSize};
	color: #ffffff;
`;

export default Links;
