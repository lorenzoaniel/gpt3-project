import React from "react";
import styled from "styled-components";

type ImageProps = {
	srcProp: string;
	variant?: string;
	avatarCircleDiffVal?: string;
};

type ImageStyledProps = {
	variant: string;
	avatarCircleDiffVal?: string;
};

interface ImageVariantsType {
	ImageContainer: any;
}

const Image = (props: ImageProps) => {
	const { srcProp, avatarCircleDiffVal, variant = "default" } = props;

	return (
		<ImageContainer avatarCircleDiffVal={avatarCircleDiffVal} src={srcProp} variant={variant} />
	);
};

const ImageVariants: ImageVariantsType = {
	/* variants of the component can be applied on the 'variant' prop as a string. ex variant={"navStyle"} */
	ImageContainer: {
		/* default to rely on base style stated on style component */
		default: `
      object-fit: contain;
      width: 100%;
      max-height: 100%;
    `,
		avatarCircleStyle: `
			background: green;
			width: 45px;
			height: 45px;
			border-radius: 50%;
			border: 2.08948px solid #FFFFFF;
			display: inline-block;
			position: absolute;
		`,
		companyBrandStyle: `
			height: 100%;
		`,
	},
};

const ImageContainer = styled.img<ImageStyledProps>`
	${(props) => "margin-left:" + props.avatarCircleDiffVal || ""};
	${(props) => ImageVariants.ImageContainer[props.variant as keyof ImageVariantsType]};
`;

export default Image;
