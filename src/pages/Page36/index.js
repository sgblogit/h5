import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
const Page36 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);
	
	let ChildGIF = images.page34.childGIF34;
	

	const clickEventName = "page36";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [IconKidOne, setIconKidOne] = useState(images.page36.Icon2Kid36);
	const [activeDisplay, setActiveDisplay] = useState(false);
	const [activeDisplayOne, setActiveDisplayOne] = useState(false);
	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				activeDisplay : setActiveDisplay,
				activeDisplayOne : setActiveDisplayOne,
				ChildGIF : setIconKidOne
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page36">
			<div className="page36-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<div className="main">
					<div className="main-list">
						<div className=" item main-list-left">
							<div className={`list-left-top hidden ${activeDisplayOne ? "active" : ""} `}>
								<img src={images.page36.Text1Kid36} alt=""></img>
							</div>
							<div className="list-left-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page36',
												eventData: {
													playAudio: 'Vce36',
													active: true,
													activeDisplayOne : true,
											
			
												},
											},
										},
										1
									);
									
								}}
							>
								<img src={images.page36.Icon1Kid36} alt=""></img>
							</div>
						</div>
						<div className="item main-list-right">
							<div className={`list-right-top hidden ${activeDisplay ? "active" : ""} `}>
								<img src={images.page36.Text2Kid36} alt=""></img>
							</div>
							<div className="list-right-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page36',
												eventData: {
													playAudio: 'VceSe36',
													active: true,
													activeDisplay : true,
													ChildGIF : ChildGIF
			
												},
											},
										},
										0
									);
									
								}}
							>
								<img src={IconKidOne} alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page36);
