import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
import ConversationBoyG from "components/ConversationBoyG/index";
const Page35 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page35";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [activeRing, setActiveRing] = useState(false);
	const [iconKid, setIconKid] = useState(images.page35.IconKid35);

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
		<div className="page35">
			
			<div className="pageCus-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<ConversationBoyG 
					page="page35"
					textKid={images.page35.TextKid35}
					iconKids={iconKid}
					childGIF={images.page35.childGIF35}
					classCenter
					activeRing={activeRing}
					audio= "Vce35"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page35);
