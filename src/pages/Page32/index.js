import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
import ConversationBoyG from "components/ConversationBoyG/index";
const Page32 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page32";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	const [activeRing, setActiveRing] = useState(false);
	const [iconKid, setIconKid] = useState(images.page32.IconKid32);
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
		<div className="page32">
			
			<div className="pageCus-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<ConversationBoyG 
					page="page32"
					textKid={images.page32.TextKid32}
					iconKids={iconKid}
					childGIF={images.page32.childGIF32}
					activeRing={activeRing}
					audio= "Vce32"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page32);
