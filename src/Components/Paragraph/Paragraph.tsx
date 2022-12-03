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
	},
};

const ParagraphVariants: ParagraphVariantsType = {
	ParagraphContainer: {
		default: ``,
		headerStyle: `
      width: 75%
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
	},
};

const ParagraphContainer = styled.div<ParagraphStyledProps>`
	${(props) => ParagraphVariants.ParagraphContainer[props.variant as keyof ParagraphVariantsType]};
`;

const ParagraphContent = styled.p<ParagraphStyledProps>`
	${(props) => ParagraphVariants.ParagraphContent[props.variant as keyof ParagraphVariantsType]};
`;

export default Paragraph;
