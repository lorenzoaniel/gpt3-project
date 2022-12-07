import React from "react";
import styled from "styled-components";

type HeadingProps = {
	headingTitleProp: string;
	variant?: string;
};

type HeadingStyledProps = {
	variant: string;
};

interface HeadingVariantsType {
	HeadingContainer: any;
}

const Heading = (props: HeadingProps) => {
	const { headingTitleProp, variant = "default" } = props;

	return <HeadingContainer variant={variant}>{headingTitleProp}</HeadingContainer>;
};

const HeadingVariantsMixins: HeadingVariantsType = {
	HeadingContainer: {
		rainbowTextFill: `
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    `,
		whiteTextFill: `
			color: #FFFFFF;
		`,
	},
};

const HeadingVariants: HeadingVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	HeadingContainer: {
		default: `` /* default to rely on base style stated on style component */,
		headerStyle: `
      ${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}

      font-weight: 800;
      font-size: clamp(31px, 4vw, 68px);
      line-height: 75px;
      letter-spacing: -0.04em;
    `,
		featureOneWhite: `
			${HeadingVariantsMixins.HeadingContainer.whiteTextFill}

			grid-area: heading;

			font-weight: 800;
			font-size: 24px;
			line-height: 75px;
			letter-spacing: -0.04em;
		`,

		featureOneRainbow: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}

			width: 50%;

			font-weight: 800;
			font-size: 34px;
			line-height: 45px;

			padding-top: 2%;
		`,
	},
};

const HeadingContainer = styled.span<HeadingStyledProps>`
	${(props) => HeadingVariants.HeadingContainer[props.variant as keyof HeadingVariantsType]};
`;

export default Heading;
