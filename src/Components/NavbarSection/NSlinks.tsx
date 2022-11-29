import React from "react";
import styled from "styled-components";

type NSLinksProps = {
	linkNameProp: string;
};

const NSLinks = (props: NSLinksProps) => {
	const { linkNameProp } = props;

	return <NSLinksContainer>{linkNameProp}</NSLinksContainer>;
};

const NSLinksContainer = styled.a``;

export default NSLinks;
