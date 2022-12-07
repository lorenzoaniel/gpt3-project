import React from "react";
import styled from "styled-components";

import Image from "../../Components/Image/Image";

import atlassianImg from "../../Assets/Img/CompanyBrands/atlassian.png";
import dropboxImg from "../../Assets/Img/CompanyBrands/dropbox.png";
import googleImg from "../../Assets/Img/CompanyBrands/google.png";
import shopifyImg from "../../Assets/Img/CompanyBrands/shopify.png";
import slackImg from "../../Assets/Img/CompanyBrands/slack.png";

const brandsArray = [googleImg, slackImg, atlassianImg, dropboxImg, shopifyImg];

const CompanyBrands = () => {
	return (
		<CompanyBrandsContainer>
			<BrandsMiniContainer>{createBrands}</BrandsMiniContainer>
		</CompanyBrandsContainer>
	);
};

const createBrands = brandsArray.map((curr, index) => {
	return <Image key={index} srcProp={curr} variant={"companyBrandStyle"} />;
});

const CompanyBrandsContainer = styled.section`
	/* background-color: red; */
	height: 250px;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const BrandsMiniContainer = styled.div`
	/* background-color: orange; */
	height: 30px;
	width: 100%;

	display: flex;
	justify-content: center;

	column-gap: 5%;
`;

export default CompanyBrands;
