import React from "react";
import styled from "styled-components";

type ButtonProps = {
	buttonNameProp: string;
	variant: string;
};

type ButtonStyledProps = {
	variant: string;
};

interface ButtonVariantsType {
	ButtonContainer: any;
}

const Button = (props: ButtonProps) => {
	const { buttonNameProp, variant } = props;

	return <ButtonContainer variant={variant}>{buttonNameProp}</ButtonContainer>;
};

const ButtonVariants: ButtonVariantsType = {
	ButtonContainer: {
		navStyle: {
			height: "58px",
			width: "152px",
			borderRadius: "5px",
			backgroundColor: "#FF4820",
		},
		navStyleTransparent: {
			height: "58px",
			width: "152px",
		},
	},
};

const ButtonContainer = styled.button<ButtonStyledProps>`
	background-color: ${(props) =>
		ButtonVariants.ButtonContainer[props.variant as keyof ButtonVariantsType].backgroundColor};
	height: ${(props) =>
		ButtonVariants.ButtonContainer[props.variant as keyof ButtonVariantsType].height};
	width: ${(props) =>
		ButtonVariants.ButtonContainer[props.variant as keyof ButtonVariantsType].width};
`;

export default Button;
