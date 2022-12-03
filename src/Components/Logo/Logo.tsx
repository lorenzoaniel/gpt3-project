import React from "react";
import styled from "styled-components";

type LogoProps = {
	logoNameProp: string;
	variant?: string;
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
	const { logoNameProp, variant = "default" } = props;

	return (
		<LogoContainer>
			<LogoMiniContainer>
				<LogoLetters variant={variant}>{logoNameProp}</LogoLetters>
			</LogoMiniContainer>
		</LogoContainer>
	);
};

const LogoVariants: LogoVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	LogoContainer: {},
	LogoMiniContainer: {},
	LogoLetters: {
		default: `` /* default to rely on base style stated on style component */,
		navStyle: `
			font-size: 22px,
		`,
		footerStyle: `
			font-size: 24px,
		`,
	},
};

export const LogoContainer = styled.div`
	/* background-color: green; */
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoMiniContainer = styled.span`
	/* background-color: orange; */
	color: #ffffff;
`;

export const LogoLetters = styled.a<LogoStyledProps>`
	font-weight: 900;

	${(props) => LogoVariants.LogoLetters[props.variant as keyof LogoVariantsType]}
`;

export default Logo;
