import { useSelector } from "react-redux";
import Container from "components/Container/index";
import React from "react";
import Page0 from "./Page0";
import Page1 from "./Page1";
import Page2 from "./Page2";
import images from "assets/images/index";
import "./styles.scss";

const Pages = (props) => {
	const { onPushAction } = props;

	const { currentPage } = useSelector((state) => state.app);

	let Page;

	switch (currentPage) {
		case 0:
			Page = <Page0 onPushAction={onPushAction} />;
			break;
		case 1:
			Page = <Page1 onPushAction={onPushAction} />;
			break;
		case 2:
			Page = <Page2 onPushAction={onPushAction} />;
			break;
		default:
			break;
	}

	return (
		<div
			className={`page-content page${currentPage}`}
			style={{ backgroundImage: `url(${images.background[currentPage]})` }}
		>
			<Container>{Page}</Container>
		</div>
	);
};

export default Pages;
