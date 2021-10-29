import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
const Page37 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page37";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [activeDisplay, setActiveDisplay] = useState(false);
	const [activeDisplayOne, setActiveDisplayOne] = useState(false);

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				activeDisplay : setActiveDisplay,
				activeDisplayOne : setActiveDisplayOne,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page37">
			<div className="page37-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<div className="main">
					<div className="main-list">
						<div className=" item main-list-left">
							<div className=
								{`list-left-top hidden ${activeDisplay ? "active" : ""} `}
							>
								<img src={images.page37.Text1Kid37} alt=""></img>
							</div>
							<div className="list-left-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page37',
												eventData: {
													playAudio: 'VceSe37',
													active: true,
													activeDisplay : true,
												
			
												},
											},
										},
										0
									);
									
								}}
							>
								<img src={images.page37.Icon1Kid37} alt=""></img>
							</div>
						</div>
						<div className="item main-list-right">
							<div className={`list-right-top hidden ${activeDisplayOne ? "active" : ""} `}>
								<img src={images.page37.Text2Kid37} alt=""></img>
							</div>
							<div className="list-right-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page37',
												eventData: {
													playAudio: 'Vce37',
													active: true,
													activeDisplayOne : true,
											
			
												},
											},
										},
										1
									);
									
								}}
							>
								<img src={images.page37.Icon2Kid37} alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page37);
