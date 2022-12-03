import React from "react";
import styled from "styled-components";

type LinksProps = {
	linkNameProp?: string;
	variant?: string;
};

type LinksStyledProps = {
	variant: string;
};

interface LinksVariantsType {
	LinksContainer: any;
}

const Links = (props: LinksProps) => {
	const { linkNameProp, variant = "default" } = props;

	return <LinksContainer variant={variant}>{linkNameProp}</LinksContainer>;
};

const LinksVariants: LinksVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	LinksContainer: {
		default: `` /* default to rely on base style stated on style component */,
		navStyle: `
			font-size: 18px,
		`,
	},
};

const LinksContainer = styled.a<LinksStyledProps>`
	color: #ffffff;
	text-align: center;

	${(props) => LinksVariants.LinksContainer[props.variant as keyof LinksVariantsType]};
`;

export default Links;
