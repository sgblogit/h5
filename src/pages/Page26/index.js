import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";
import WhatYourName from "components/WhatYourName/index";

const Page26 = (props) => {
	const { onPushAction } = props;
	// const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [image1, setImage1] = useState(images.page26.kid27);

	const [text, setTextT1] = useState(null);
	const clickEventName = "page26";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				imageG1: setImage1,
				textT1: setTextT1,

				
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);
	return (
	<WhatYourName
		page="page26"
		image1={image1}
		imageG1={images.page26.gKid27}
		text={text}
		textGT1={images.page26.text27}
		clickHandler={clickHandler}
		audio="noIDont"
		// active={active}
		reverseObj="reverse"
	

	/>
	)
};

export default React.memo(Page26);
