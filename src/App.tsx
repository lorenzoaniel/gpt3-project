import React from "react";
import styled from "styled-components";

import Navbar from "./Sections/Navbar/Navbar";

import { GlobalStyle } from "./Styles/GlobalStyle/GlobalStyle";

const AppContainer = styled.div`
	background-color: yellow;
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
			</AppContainer>
		</>
	);
}

export default App;
