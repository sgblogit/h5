import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
import ConversationBoyG from "components/ConversationBoyG/index";
const Page34 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page34";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [activeRing, setActiveRing] = useState(false);
	const [iconKid, setIconKid] = useState(images.page34.IconKid34);
	
	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				activeRing : setActiveRing,
				childGIF : setIconKid
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page34">
			
			<div className="pageCus-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<ConversationBoyG 
					page="page34"
					textKid={images.page34.TextKid34}
					iconKids={iconKid}
					childGIF={images.page34.childGIF34}
					classCenter
					activeRing={activeRing}
					audio= "Vce34"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page34);
