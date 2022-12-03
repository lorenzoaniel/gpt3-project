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
	},
};

const HeadingVariants: HeadingVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	HeadingContainer: {
		default: `` /* default to rely on base style stated on style component */,
		headerStyle: `
      ${HeadingVariantsMixins.HeadingContainer.rainbowTextFill}

      font-weight: 800;
      font-size: 62px;
      line-height: 75px;
      letter-spacing: -0.04em;
    `,
	},
};

const HeadingContainer = styled.span<HeadingStyledProps>`
	${(props) => HeadingVariants.HeadingContainer[props.variant as keyof HeadingVariantsType]};
`;

export default Heading;
