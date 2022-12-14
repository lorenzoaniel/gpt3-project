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
}

const Logo = (props: LogoProps) => {
	const { logoNameProp, variant = "default" } = props;

	return (
		<LogoContainer variant={variant}>
			<LogoLetters variant={variant}>{logoNameProp}</LogoLetters>
		</LogoContainer>
	);
};

const LogoMixinVariants: LogoVariantsType = {
	LogoContainer: {
		default: `
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		`,
	},
	LogoLetters: {
		default: `
			font-weight: 900;
			color: #ffffff;
		`,
	},
};

const LogoVariants: LogoVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	LogoContainer: {
		default: `` /* default to rely on base style stated on style component */,
		navStyle: `
			${LogoMixinVariants.LogoContainer.default}
		`,
		footerStyle: `
			${LogoMixinVariants.LogoContainer.default}
			height: fit-content;
			width: fit-content;
		`,
	},
	LogoLetters: {
		default: `` /* default to rely on base style stated on style component */,
		navStyle: `
			${LogoMixinVariants.LogoLetters.default}
			font-size: 22px;
		`,
		footerStyle: `
			${LogoMixinVariants.LogoLetters.default}
			font-size: 36px;
		`,
	},
};

export const LogoContainer = styled.div<LogoStyledProps>`
	/* background-color: green; */
	${(props) => LogoVariants.LogoContainer[props.variant as keyof LogoVariantsType]}
`;

export const LogoLetters = styled.a<LogoStyledProps>`
	${(props) => LogoVariants.LogoLetters[props.variant as keyof LogoVariantsType]}
`;

export default Logo;
