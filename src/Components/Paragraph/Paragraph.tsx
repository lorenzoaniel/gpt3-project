import React from "react";
import styled from "styled-components";

type ParagraphProps = {
	contentProp: string;
	variant?: string;
};

type ParagraphStyledProps = {
	variant: string;
};

interface ParagraphVariantsType {
	ParagraphContainer: any;
	ParagraphContent: any;
}

const Paragraph = (props: ParagraphProps) => {
	const { contentProp, variant = "default" } = props;

	return (
		<ParagraphContainer variant={variant}>
			<ParagraphContent variant={variant}>{contentProp}</ParagraphContent>
		</ParagraphContainer>
	);
};

const ParagraphMixinVariants: ParagraphVariantsType = {
	ParagraphContainer: {},
	ParagraphContent: {
		lightBlueText: `
      color: #81AFDD;
    `,
		featureOne: `
			font-weight: 500;
			font-size: 16px;
			line-height: 2.5vw;
		`,
	},
};

const ParagraphVariants: ParagraphVariantsType = {
	ParagraphContainer: {
		default: ``,
		headerStyle: `
      width: 75%;
    `,
		featureOne: `
			width: 90%;
			height: fit-content;

			grid-area: paragraph;
			margin-top: 2%;
		`,
		featureOneCenter: `
			width: fit-content;
			margin-top: 4%;
		`,
	},
	ParagraphContent: {
		default: ``,
		headerStyle: `
      ${ParagraphMixinVariants.ParagraphContent.lightBlueText}
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
    `,
		featureOne: `
			${ParagraphMixinVariants.ParagraphContent.featureOne}
			color: #81AFDD;
		`,
		featureOneCenter: `
			${ParagraphMixinVariants.ParagraphContent.featureOne}
			color: #FF8A71;
		`,
	},
};

const ParagraphContainer = styled.div<ParagraphStyledProps>`
	${(props) => ParagraphVariants.ParagraphContainer[props.variant as keyof ParagraphVariantsType]};
`;

const ParagraphContent = styled.p<ParagraphStyledProps>`
	${(props) => ParagraphVariants.ParagraphContent[props.variant as keyof ParagraphVariantsType]};
`;

export default Paragraph;
