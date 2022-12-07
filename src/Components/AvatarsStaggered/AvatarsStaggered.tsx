import React from "react";
import styled from "styled-components";

import Image from "../Image/Image";

const testArray = Array(6).fill(null);

type AvatarsStaggeredProps = {
	listOfAvatarProfileSrc?: string[];
	estimatedNumbOfUsers?: string;
	exactNumbUsers: number;
	lastTimeRange: string;
	avatarDescProp: string;
};

const AvatarsStaggered = (props: AvatarsStaggeredProps) => {
	const { avatarDescProp, exactNumbUsers, lastTimeRange } = props;

	return (
		<MainContainer>
			<AvatarsMiniContainer>{createAvatars}</AvatarsMiniContainer>
			<DescriptionMiniContainer>
				{exactNumbUsers + avatarDescProp + lastTimeRange}
			</DescriptionMiniContainer>
		</MainContainer>
	);
};

const createAvatars = testArray.map((curr: null, index: number) => {
	return (
		<Image
			key={index}
			srcProp=""
			avatarCircleDiffVal={`${index * 1.2}%`}
			variant={"avatarCircleStyle"}
		/>
	);
});

const MainContainer = styled.div`
	/* background-color: green; */
	height: 45px;
	width: 80%;

	display: flex;
`;

const AvatarsMiniContainer = styled.div`
	/* background-color: orange; */
	height: 100%;
	width: 35%;
`;

const DescriptionMiniContainer = styled.div`
	/* background-color: red; */
	height: 100%;
	width: 65%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	font-weight: 500;
	font-size: 16px;
	color: #ffffff;
`;

export default AvatarsStaggered;
