import React from "react";
import styled from "styled-components";

type ButtonProps = {
	buttonNameProp: string;
	variant?: string;
};

type ButtonStyledProps = {
	variant: string;
};

interface ButtonVariantsType {
	ButtonContainer: any;
}

const Button = (props: ButtonProps) => {
	const { buttonNameProp, variant = "default" } = props;

	return <ButtonContainer variant={variant}>{buttonNameProp}</ButtonContainer>;
};

const ButtonVariants: ButtonVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	ButtonContainer: {
		default: `` /* default to rely on base style stated on style component */,
		navStyle: `
			background-color: #FF4820;
		`,
		navStyleTransparent: `
			background-color: transparent;
		`,
		headerStyle: `
			width: 30%;
			height: 100%;
			border-radius: 0px 5px 5px 0px;
      background-color: #FF4820;
		`,
	},
};

const ButtonContainer = styled.button<ButtonStyledProps>`
	height: 58px;
	width: 152px;

	border: none;
	border-radius: 5px;

	color: #ffffff;
	font-size: 18px;

	${(props) => ButtonVariants.ButtonContainer[props.variant as keyof ButtonVariantsType]};
`;

export default Button;
