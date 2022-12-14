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
		defGridArea: `
			grid-area: heading;
		`,
		rainbowTextFill: `
      background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    `,
		rainbowTextFont34: `
			font-weight: 800;
			font-size: 34px;
			line-height: 45px;
		`,
		rainbowTextFont62: `
			font-weight: 800;
			font-size: 62px;
			line-height: 75px;
			letter-spacing: -0.04em;
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
      font-size: clamp(31px, 4vw, 60px);
      line-height: 75px;
      letter-spacing: -0.04em;
    `,
		featureOneWhite: `
			${HeadingVariantsMixins.HeadingContainer.whiteTextFill}
			${HeadingVariantsMixins.HeadingContainer.defGridArea}

			font-weight: 800;
			font-size: 24px;
			line-height: 75px;
			letter-spacing: -0.04em;
		`,

		featureOneRainbow: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}
			width: 50%;
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFont34}
			padding-top: 2%;
		`,

		featureTwoRainbow: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFont34}
			display: inline-block;
			width: 75%;
		`,

		featureTwoWhite: `
			${HeadingVariantsMixins.HeadingContainer.whiteTextFill}
			${HeadingVariantsMixins.HeadingContainer.defGridArea}
			font-weight: 800;
			font-size: clamp(12px, 1vw, 18px);
			line-height: 24px;
			letter-spacing: -0.04em;

			width: 80%;
		`,
		featureThreeRainbow: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFont34}
		`,
		CTA: `
			${HeadingVariantsMixins.HeadingContainer.defGridArea}
			font-weight: 800;
			font-size: 24px;
			line-height: clamp(30px, 3vw ,45px);
			color: #000000;
		`,
		Blog: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFont62}

			display: inline-block;
			width: 70%;
			height: 100%;
		`,
		articlePrimary: `
			${HeadingVariantsMixins.HeadingContainer.whiteTextFill}
			font-weight: 800;
			font-size: 25.11px;
			line-height: 30px;
		`,
		articleSecondary: `
			${HeadingVariantsMixins.HeadingContainer.whiteTextFill}
			font-weight: 800;
			font-size: 19.3154px;
			line-height: 30px;
		`,
		footerMain: `
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}
			${HeadingVariantsMixins.HeadingContainer.rainbowTextFont62}
			text-align: center;
			
		`,
	},
};

const HeadingContainer = styled.span<HeadingStyledProps>`
	${(props) => HeadingVariants.HeadingContainer[props.variant as keyof HeadingVariantsType]};
`;

export default Heading;
