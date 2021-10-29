import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import "./styles.scss";
import images from "assets/images/index";
import { handleClickImage, runRecord } from "helper/appServices";
import ButtonControlPlayer from "components/ButtonControlPlayer/index";

const Page1 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);
	const [isPlayAudio, setIsPlayAudio] = useState(false);
	const [thunder, setThunder] = useState(null);
	const [cloud, setCloud] = useState(null);
	const [sun, setSun] = useState(null);
	const [activeDisplay, setActiveDisplay] = useState(false);

	const clickEventName = "page1";

	let cloudGif = images.page0.cloudGif;
	let thunderGif = images.page1.SamSet;
	let sunGif = images.page1.Sun;
	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				cloudGif : setCloud,
				thunderGif : setThunder,
				sunGif : setSun,
				activeDisplay : setActiveDisplay
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const handleControlAudioCustom = useCallback((boolean) => {
		setIsPlayAudio(boolean);
	}, []);
	return (
		<div className="page1">
				<ButtonControlPlayer
					page="page1"
					clickHandler={clickHandler}
					onPushAction={onPushAction}
					isAutoPlay={false}
					audioName={"infoSeconce"}
					handleControlAudioCustom={handleControlAudioCustom}
					isPlayAudio={isPlayAudio}
					data={
						{
							playAudio: 'infoSeconce',
							active: true,
							activeDisplay : true,
							cloudGif : cloudGif ,
							thunderGif : thunderGif,
							sunGif : sunGif
						}
					}
					dataPause={
						{
							playAudio: 'infoSeconce',
							active: true,
							activeDisplay : false,
							cloudGif : "" ,
							thunderGif : "",
							sunGif : ""
						}
					}
			/>
			<div className={`sunphuong hidden ${activeDisplay ? "active" : ""} `}>
				<img src={sun} alt=""></img>
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
