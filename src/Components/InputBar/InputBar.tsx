import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";

type InputBarProps = {
	InputBarPlaceholderProp: string;
	InputBarButtonTitleProp: string;
	variant?: string;
};

type InputBarStyledProps = {
	variant: string;
};

interface InputBarVariantsType {
	InputBarContainer: any;
	InputBarStyled: any;
}

const InputBar = (props: InputBarProps) => {
	const { InputBarPlaceholderProp, InputBarButtonTitleProp, variant = "default" } = props;

	return (
		<InputBarContainer variant={variant}>
			<InputBarStyled placeholder={InputBarPlaceholderProp} variant={variant} />
			<Button buttonNameProp={InputBarButtonTitleProp} variant={variant} />
		</InputBarContainer>
	);
};

const InputBarVariants: InputBarVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	InputBarContainer: {
		default: `` /* default to rely on base style stated on style component */,
		headerStyle: `
      height: 73px;
			width: 100%;
		`,
	},
	InputBarStyled: {
		default: ``,
		headerStyle: `
			width: 70%;
      background: #052D56;

			border-radius: 5px 0px 0px 5px;
      padding-left: 3%;

      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #3D6184;
		`,
	},
};

const InputBarContainer = styled.div<InputBarStyledProps>`
	display: flex;

	${(props) => InputBarVariants.InputBarContainer[props.variant as keyof InputBarVariantsType]};
`;

const InputBarStyled = styled.input<InputBarStyledProps>`
	height: 100%;
	border: none;

	${(props) => InputBarVariants.InputBarStyled[props.variant as keyof InputBarVariantsType]};
`;

export default InputBar;
