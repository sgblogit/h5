import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import images from "assets/images/index";
import { runRecord } from "helper/appServices";
import WhatYourName from "components/WhatYourName/index";

const Page27 = (props) => {
	const { onPushAction } = props;
	// const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [image1, setImage1] = useState(images.page27.teacher28);
	const [text, setTextT1] = useState(null);
	const [text2, setTextT2] = useState(null);

	const clickEventName = "page27";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				imageG1: setImage1,
				textT1: setTextT1,
				textT2: setTextT2,

				
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);
	return (
	<WhatYourName
		page="page27"
		image1={image1}
		imageG1={images.page27.gTteacher28}
		text={text}
		text2={text2}
		textGT2={images.page27.text28s}
		textGT1={images.page27.text28}
		clickHandler={clickHandler}
		audio="whatColorDoYouLike"
		textunder = "textunder"
		textunder2 = "textunder2"
		// active={active}
	

	/>
	)
};

export default React.memo(Page27);
