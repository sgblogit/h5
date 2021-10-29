import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";
import WhatYourName from "components/WhatYourName/index";

const Page24 = (props) => {
	const { onPushAction } = props;
	// const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [image1, setImage1] = useState(images.page24.kid25);
	const [text, setTextT1] = useState(null);

	const clickEventName = "page24";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		setTimeout(() => {
			setImage1(image1)
		}, 3000);
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
		page="page24"
		image1={image1}
		imageG1={images.page24.gKid25}
		text={text}
		textGT1={images.page24.text25}
		clickHandler={clickHandler}
		audio="imFromHaNoi"
		// active={active}
		reverseObj="reverse"
	

	/>
	)
};

export default React.memo(Page24);
