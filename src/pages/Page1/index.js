import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import "./styles.scss";
import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";

const Page1 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [thunder, setThunder] = useState(null);
	const [cloud, setCloud] = useState(null);
	const [activeDisplay, setActiveDisplay] = useState(false);

	const clickEventName = "page1";

	let cloudGif = images.page0.cloudGif;
	let thunderGif = images.page1.SamSet;
	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				cloudGif : setCloud,
				thunderGif : setThunder,
				activeDisplay : setActiveDisplay
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page1">
			<button className="controll"
					onClick={(e) => {
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName: 'page1',
									eventData: {
										playAudio: 'infoSeconce',
										active: true,
										activeDisplay : true,
										cloudGif : cloudGif ,
										thunderGif : thunderGif

									},
								},
							},
							0
						);
						
					}}
				>
					<img src={images.common.Button} alt="">
					</img>
				</button>
			<div className={`samset hidden ${activeDisplay ? "active" : ""} `}>
				<img src={thunder} alt=""></img>
			</div>
			<div className={`mayoi hidden ${activeDisplay ? "active" : ""} `} >
				<img src={cloud} alt=""></img>
			</div>
			<div className="page1-wrraper">
				<div className="main">
					<div className="teacher-left">
						<img src={images.page1.Teacher1} alt=""></img>
					</div>
					<div className="list-kids">
						<div className="item">
							<img src={images.page1.Kid2} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page1.Kid3} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page1.Kid4} alt=""></img>
						</div>
						<div className="item">
							<img src={images.page1.Kid5} alt=""></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page1);
