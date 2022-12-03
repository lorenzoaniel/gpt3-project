import React from "react";
import styled from "styled-components";

type ImageProps = {
	srcProp: string;
	variant?: string;
};

type ImageStyledProps = {
	variant: string;
};

interface ImageVariantsType {
	ImageContainer: any;
}

const Image = (props: ImageProps) => {
	const { srcProp, variant = "default" } = props;

	return <ImageContainer variant={variant} src={srcProp} />;
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
	},
};

const ImageContainer = styled.img<ImageStyledProps>`
	${(props) => ImageVariants.ImageContainer[props.variant as keyof ImageVariantsType]};
`;

export default Image;
