import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";
import { handleClickImage, runRecord } from "helper/appServices";
import ButtonControlPlayer from "components/ButtonControlPlayer/index";

const Page2 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page2";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};
	console.log(window,"adadsadhsaj");
	const [isPlayAudio, setIsPlayAudio] = useState(false);
	const [thunder, setThunder] = useState(null);
	const [cloud, setCloud] = useState(null);
	const [sun, setSun] = useState(null);
	const [activeDisplay, setActiveDisplay] = useState(false);
	let cloudGif = images.page0.cloudGif;
	let thunderGif = images.page1.SamSet;
	let sunGif = images.page1.Sun;

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				cloudGif : setCloud,
				thunderGif : setThunder,
				activeDisplay : setActiveDisplay,
				sunGif : setSun,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const handleControlAudioCustom = useCallback((boolean) => {
		setIsPlayAudio(boolean);
	}, []);

	return (
		<div className="page2">
			<img className="bgPage2" src={images.background[2]} alt="" />
			<div className={`sunphuong hidden ${activeDisplay ? "active" : ""} `}>
				<img src={sun} alt=""></img>
			</div>
			<div className={`samset hidden ${activeDisplay ? "active" : ""} `}>
				<img src={thunder} alt=""></img>
			</div>
			<div className={`mayoi hidden ${activeDisplay ? "active" : ""} `} >
				<img src={cloud} alt=""></img>
			</div>
				<ButtonControlPlayer
					page="page2"
					clickHandler={clickHandler}
					onPushAction={onPushAction}
					isAutoPlay={false}
					audioName={"VceChilden"}
					handleControlAudioCustom={handleControlAudioCustom}
					isPlayAudio={isPlayAudio}
					boyCar={images.page0.CarGif}
					
					data={
						{
							playAudio: 'VceChilden',
							active: true,
							activeDisplay : true,
							cloudGif : cloudGif ,
							thunderGif : thunderGif,
							sunGif : sunGif
						}
					}
			/>
			<div className="page-wrraper">
				<div className="main">
					<div className="kidBoy">
						<img src={images.page2.VceChilden} alt=""></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Page2);
