import React from "react";
import styled from "styled-components";

import Article from "../../Components/Article/Article";
import Heading from "../../Components/Heading/Heading";

import article1 from "../../Assets/Img/Blog/article1.png";
import article2 from "../../Assets/Img/Blog/article2.png";
import article3 from "../../Assets/Img/Blog/article3.png";
import article4 from "../../Assets/Img/Blog/article4.png";
import article5 from "../../Assets/Img/Blog/article5.png";

const Blog = () => {
	return (
		<BL.mainContainer>
			<BL.mainHeader>
				<Heading
					headingTitleProp={"A lot is happening, We are blogging about it."}
					variant={"Blog"}
				/>
			</BL.mainHeader>
			<BL.mainArticle>
				<Article
					titleProp={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
					dateProp={"Sep 26, 2021"}
					srcImgProp={article1}
					variant={"articlePrimary"}
				/>
			</BL.mainArticle>
			<BL.articleTilesContainer>
				<Article
					titleProp={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
					dateProp={"Sep 26, 2021"}
					srcImgProp={article2}
					variant={"articleSecondary"}
				/>
				<Article
					titleProp={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
					dateProp={"Sep 26, 2021"}
					srcImgProp={article3}
					variant={"articleSecondary"}
				/>
				<Article
					titleProp={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
					dateProp={"Sep 26, 2021"}
					srcImgProp={article4}
					variant={"articleSecondary"}
				/>
				<Article
					titleProp={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
					dateProp={"Sep 26, 2021"}
					srcImgProp={article5}
					variant={"articleSecondary"}
				/>
			</BL.articleTilesContainer>
		</BL.mainContainer>
	);
};

const BL = {
	mainContainer: styled.section`
		/* background-color: red; */
		height: 970px;
		width: 100%;
		margin-bottom: 154px;

		display: grid;
		grid-template-columns: 30% 70%;
		grid-template-rows: 30% 70%;
		grid-template-areas: "header header" "mainArticle articleTiles";
	`,
	mainHeader: styled.aside`
		height: 100%;
		width: 100%;
		grid-area: header;
	`,
	mainArticle: styled.aside`
		height: 100%;
		width: 100%;
		display: flex;

		grid-area: mainArticle;
	`,
	articleTilesContainer: styled.aside`
		height: 100%;
		width: 100%;
		padding-left: 5%;

		grid-area: articleTiles;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 5%;
	`,
};

export default Blog;
