import React from "react";
import styled from "styled-components";

import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import CompanyBrands from "./Sections/CompanyBrands/CompanyBrands";
import FeatureOne from "./Sections/FeatureOne/FeatureOne";
import FeatureTwo from "./Sections/FeatureTwo/FeatureTwo";
import FeatureThree from "./Sections/FeatureThree/FeatureThree";
import CTA from "./Sections/CTA/CTA";
import Blog from "./Sections/Blog/Blog";
import Footer from "./Sections/Footer/Footer";

import { GlobalStyle } from "./Styles/GlobalStyle/GlobalStyle";

const AppContainer = styled.main`
	background-color: var(--main-background-color);
	height: fit-content;
	width: inherit;

	display: flex;
	flex-direction: column;
	padding: 0 5%;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Navbar />
				<Header />
				<CompanyBrands />
				<FeatureOne />
				<FeatureTwo />
				<FeatureThree />
				<CTA />
				<Blog />
			</AppContainer>
			<Footer />
		</>
	);
}

export default App;
