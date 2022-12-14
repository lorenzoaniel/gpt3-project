import React from "react";
import styled from "styled-components";

type LineProps = {
	variant?: string;
};

type LineStyledProps = {
	variant: string;
};

interface LineVariantsType {
	MainContainer: any;
}

const Line = (props: LineProps) => {
	const { variant = "default" } = props;

	return <MainContainer variant={variant} />;
};

const LineVariantsMixins: LineVariantsType = {
	MainContainer: {
		defGridArea: `
      grid-area: line;
    `,
	},
};

const LineVariants: LineVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	MainContainer: {
		default: "" /* default to rely on base style stated on style component */,
		featureOne: `
      ${LineVariantsMixins.MainContainer.defGridArea}
      align-self: flex-end;
    `,
		featureTwo: `
      ${LineVariantsMixins.MainContainer.defGridArea}
      align-self: flex-end;
    `,
	},
};

const MainContainer = styled.div<LineStyledProps>`
	background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%), #ffffff;
	width: 38px;
	height: 3px;

	${(props) => LineVariants.MainContainer[props.variant as keyof LineVariantsType]};
`;

export default Line;
