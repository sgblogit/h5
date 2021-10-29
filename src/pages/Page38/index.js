import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import TitleMeeting from "components/TitleMeetting/index";
import './style.scss'
const Page38 = (props) => {
	const { onPushAction } = props;

	const { currentRecord } = useSelector(
		(state) => state.app
	);

	

	const clickEventName = "page38";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [iconKidOne, setIconKidOne] = useState(images.page38.Icon2Kid38);
	const [activeDisplay, setActiveDisplay] = useState(false);
	const [activeDisplayOne, setActiveDisplayOne] = useState(false);
	let ChildGIF = images.page33.childGIF33;
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
		<div className="page38">
			<div className="page38-wrraper">
                <TitleMeeting bgTitle={images.common.title}/>
				<div className="main">
					<div className="main-list">
						<div className=" item main-list-left">
							<div className=
								{`list-left-top hidden ${activeDisplay ? "active" : ""} `}
							>
								<img src={images.page38.Text1Kid38} alt=""></img>
							</div>
							<div className="list-left-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page38',
												eventData: {
													playAudio: 'VceSe38',
													active: true,
													activeDisplay : true,
													
			
												},
											},
										},
										0
									);
									
								}}
							>
								<img src={images.page38.Icon1Kid38} alt=""></img>
							</div>
						</div>
						<div className= "item main-list-right" >
							<div className= {`list-right-top hidden ${activeDisplayOne ? "active" : ""} `}>
								<img src={images.page38.Text2Kid38} alt=""></img>
							</div>
							<div className="list-right-bottom"
								onClick={(e) => {
									handleClickImage(
										clickHandler,
										{
											event: e,
											data: {
												actionType: "fireEvent",
												eventName: 'page38',
												eventData: {
													playAudio: 'Vce38',
													active: true,
													activeDisplayOne : true,
													ChildGIF : ChildGIF
			
												},
											},
										},
										1
									);
									
								}}
							>
								<img src={iconKidOne} alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page38);
