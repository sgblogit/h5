import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";
import WhatYourName from "components/WhatYourName/index";

const Page23 = (props) => {
	const { onPushAction } = props;
	// const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [image1, setImage1] = useState(images.page23.teacher24);
	const [text, setTextT1] = useState(null);

	const clickEventName = "page23";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		setTimeout(() => {
			setImage1(image1)
		}, 2300);
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
		page="page23"
		image1={image1}
		imageG1={images.page23.gTeacher24}
		text={text}
		textGT1={images.page23.text24}
		clickHandler={clickHandler}
		audio="whereAreYouFrom"
		// active={active}
	

	/>
	)
};

export default React.memo(Page23);
