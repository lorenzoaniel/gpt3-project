import React from "react";
import styled from "styled-components";

type ImageProps = {
	srcProp: string;
	variant: string;
};

type ImageStyledProps = {
	variant: string;
};

interface ImageVariantsType {
	ImageContainer: any;
}

const Image = (props: ImageProps) => {
	const { srcProp, variant } = props;

	return <ImageContainer variant={variant} src={srcProp} />;
};

const ImageVariants: ImageVariantsType = {
	ImageContainer: {
		headerStyle: {
			// height: "100%",
			// width: "100%",
			// objectFit: "cover",
		},
	},
};

const ImageContainer = styled.img<ImageStyledProps>``;

export default Image;
