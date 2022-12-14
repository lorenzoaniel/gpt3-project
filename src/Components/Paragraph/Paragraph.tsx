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
	ParagraphContainer: {
		defGridArea: `
			grid-area: paragraph;
		`,
	},
	ParagraphContent: {
		lightBlueText: `
      color: #81AFDD;
    `,
		orangeText: `
      color: #FF8A71;
    `,
		orangeDescFont16: `
			color: #FF8A71;

			font-weight: 500;
			font-size: 16px;
			line-height: 2.5vw;
		`,
		featureThreeFont16: `
			font-size: 16px;
			line-height: 30px;
		`,
		articleDateDefault: `
			color: #FFFFFF;
			font-weight: 700;
			font-size: 11.649px;
			line-height: 35px;
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
			${ParagraphMixinVariants.ParagraphContainer.defGridArea}
			width: 90%;
			height: fit-content;

			margin-top: 2%;
		`,
		featureOneCenter: `
			width: fit-content;
			margin-top: 4%;
		`,
		featureTwoLightBlue: `
			${ParagraphMixinVariants.ParagraphContainer.defGridArea}
			width: 90%;
			justify-self: flex-end;
		`,
		CTA: `
			${ParagraphMixinVariants.ParagraphContainer.defGridArea}
			width: fit-content;
			align-self: flex-end;
		`,
		articlePrimary: `
			margin-top: 8px;
		`,
		articleSecondary: `
			margin-top: 7px;
		`,
		articleReadDefault: `
			width: fit-content;
			margin-top: auto; //cannot justify-self
		`,
		footerLogoDesc: `
			height: fit-content;
			width: 168px;
			text-align: center;
			margin-top: 25px;
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
			${ParagraphMixinVariants.ParagraphContent.orangeDescFont16}
			color: #81AFDD;
		`,
		featureOneCenter: `
			${ParagraphMixinVariants.ParagraphContent.orangeDescFont16}
		`,
		featureTwoOrange: `
			${ParagraphMixinVariants.ParagraphContent.orangeDescFont16}
			margin-top: 34px;
		`,
		featureTwoLightBlue: `
			${ParagraphMixinVariants.ParagraphContent.lightBlueText}
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
		`,
		featureThree: `
			${ParagraphMixinVariants.ParagraphContent.featureThreeFont16}
			${ParagraphMixinVariants.ParagraphContent.lightBlueText}
			font-weight: 400;
		`,
		featureThreeLightBlue: `
			${ParagraphMixinVariants.ParagraphContent.featureThreeFont16}	
			color: #71E5FF;
			font-weight: 500;
		`,
		featureThreeOrange: `
			${ParagraphMixinVariants.ParagraphContent.featureThreeFont16}
			${ParagraphMixinVariants.ParagraphContent.orangeText}
			font-weight: 500;
		`,
		CTA: `
			font-weight: 500;
			font-size: 12px;
			line-height: 30px;
			color: #0E0E0E;
		`,
		articlePrimary: `
			${ParagraphMixinVariants.ParagraphContent.articleDateDefault}
		`,
		articleSecondary: `
			${ParagraphMixinVariants.ParagraphContent.articleDateDefault}
		`,
		articleReadDefault: `
			${ParagraphMixinVariants.ParagraphContent.articleDateDefault}
		`,
		footerLogoDesc: `
			font-family: 'Gilroy-Medium';
			color: #FFFFFF;
			font-size: 12px;
			line-height: 14px;
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
