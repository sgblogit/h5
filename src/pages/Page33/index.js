import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
import ConversationBoyG from "components/ConversationBoyG/index";
const Page33 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page33";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	
	const [iconKid, setIconKid] = useState(images.page33.IconKid33);
	const [activeRing, setActiveRing] = useState(false);
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
		<div className="page33">
			
			<div className="pageCus-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<ConversationBoyG 
					page="page33"
					textKid={images.page33.TextKid33}
					iconKids={iconKid}
					childGIF={images.page33.childGIF33}
					classCenter
					activeRing={activeRing}
					audio= "Vce33"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page33);
