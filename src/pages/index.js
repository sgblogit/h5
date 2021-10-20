import { useSelector } from "react-redux";

import React from "react";
import Page0 from "./Page0";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Pages = (props) => {
	const { onPushAction } = props;

	const {
        currentPage,
    } = useSelector((state) => state.app);

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
		<>
			{Page}
		</>
	);
};

export default Pages;
