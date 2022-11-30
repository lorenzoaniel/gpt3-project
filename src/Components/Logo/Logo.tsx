import React from "react";
import styled from "styled-components";

type LogoProps = {
	logoNameProp: string;
	variant: string;
};

type LogoStyledProps = {
	variant: string;
};

interface LogoVariantsType {
	LogoLetters: any;
	LogoContainer: any;
	LogoMiniContainer: any;
}

const Logo = (props: LogoProps) => {
	const { variant, logoNameProp } = props;

	return (
		<LogoContainer>
			<LogoMiniContainer>
				<LogoLetters variant={variant}>{logoNameProp}</LogoLetters>
			</LogoMiniContainer>
		</LogoContainer>
	);
};

const LogoVariants: LogoVariantsType = {
	LogoContainer: {},
	LogoMiniContainer: {},
	LogoLetters: {
		navStyle: {
			fontSize: "18px",
		},
		footerStyle: {
			fontSize: "24px",
		},
	},
};

export const LogoContainer = styled.div`
	background-color: green;
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoMiniContainer = styled.span`
	background-color: orange;
	color: #ffffff;
`;

export const LogoLetters = styled.a<LogoStyledProps>`
	font-size: ${(props) =>
		LogoVariants.LogoLetters[props.variant as keyof LogoVariantsType].fontSize};
	font-weight: 900;
`;

export default Logo;
