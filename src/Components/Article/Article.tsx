import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Paragraph from "../Paragraph/Paragraph";

type ArticleProps = {
	titleProp: string;
	dateProp: string;
	srcImgProp: string;
	variant?: string;
};

type ArticleStyledProps = {
	variant: string;
};

interface ArticleVariantsType {
	MainContainer: any;
	MiniImageContainer: any;
	MiniTitleDateContainer: any;
}

const Article = (props: ArticleProps) => {
	const { titleProp, dateProp, srcImgProp, variant = "default" } = props;

	return (
		<Ar.MainContainer variant={variant}>
			<Ar.MiniImageContainer variant={variant}>
				<Image srcProp={srcImgProp} variant={"articleDef"} />
			</Ar.MiniImageContainer>
			<Ar.MiniTitleDateContainer variant={variant}>
				<Paragraph contentProp={dateProp} variant={variant} />
				<Heading headingTitleProp={titleProp} variant={variant} />
				<Paragraph contentProp={"Read Full Article"} variant={"articleReadDefault"} />
			</Ar.MiniTitleDateContainer>
		</Ar.MainContainer>
	);
};

const ArticleMixinVariants: ArticleVariantsType = {
	MainContainer: {
		default: `
      // background-color: red;
      min-height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
    `,
	},
	MiniImageContainer: {
		default: `
      // background-color: yellow;
      height: 40%;
      width: 100%;
    `,
	},
	MiniTitleDateContainer: {
		default: `
      background: #042C54;
      height: 60%;
      width: 100%;

      display: flex;
      flex-direction: column;
      padding: 25px;
    `,
	},
};

const ArticleVariants: ArticleVariantsType = {
	MainContainer: {
		default: `
      ${ArticleMixinVariants.MainContainer.default}
    `,
		articlePrimary: `
      ${ArticleMixinVariants.MainContainer.default}
    `,
		articleSecondary: `
      ${ArticleMixinVariants.MainContainer.default}
    `,
	},
	MiniImageContainer: {
		default: `
      ${ArticleMixinVariants.MiniImageContainer.default}
    `,
		articlePrimary: `
      ${ArticleMixinVariants.MiniImageContainer.default}
    `,
		articleSecondary: `
      ${ArticleMixinVariants.MiniImageContainer.default}
    `,
	},
	MiniTitleDateContainer: {
		default: `
      ${ArticleMixinVariants.MiniTitleDateContainer.default}
    `,
		articlePrimary: `
      ${ArticleMixinVariants.MiniTitleDateContainer.default}
    `,
		articleSecondary: `
      ${ArticleMixinVariants.MiniTitleDateContainer.default}
      padding: 0px 25px 25px 25px;
    `,
	},
};

const Ar = {
	MainContainer: styled.div<ArticleStyledProps>`
		${(props) => ArticleVariants.MainContainer[props.variant as keyof ArticleVariantsType]}
	`,
	MiniImageContainer: styled.div<ArticleStyledProps>`
		${(props) => ArticleVariants.MiniImageContainer[props.variant as keyof ArticleVariantsType]}
	`,
	MiniTitleDateContainer: styled.div<ArticleStyledProps>`
		${(props) => ArticleVariants.MiniTitleDateContainer[props.variant as keyof ArticleVariantsType]}
	`,
};

export default Article;
