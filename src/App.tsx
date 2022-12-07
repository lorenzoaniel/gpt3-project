import React from "react";
import styled from "styled-components";

import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";

import { GlobalStyle } from "./Styles/GlobalStyle/GlobalStyle";
import CompanyBrands from "./Sections/CompanyBrands/CompanyBrands";
import FeatureOne from "./Sections/FeatureOne/FeatureOne";

const AppContainer = styled.main`
	background-color: var(--main-background-color);
	height: inherit;
	width: inherit;

	display: flex;
	flex-direction: column;
	padding: 0 10%;
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
			</AppContainer>
		</>
	);
}

export default App;
