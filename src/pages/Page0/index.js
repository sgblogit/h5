import React, { useEffect, useCallback, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import ButtonControlAudio from "components/ButtonControlAudio/index";

const Home = (props) => {
	const { onPushAction } = props;
	const { playAudio } = audioPlayer;
	const [intro, setIntro] = useState(images.page0.kidStart);

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [isPlayAudio, setIsPlayAudio] = useState(false);

	const clickEventName = "page1";

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					if (recordEventData.eventData.imageActive) {
						setIntro(recordEventData.eventData.imageActive);
					}
					playAudio(audioUrl);
					handleControlAudioCustom(true);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const handleControlAudioCustom = useCallback((boolean) => {
		setIsPlayAudio(boolean);
	}, []);

	return (
		<div className="page0">
			{/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page0",
						eventData: {
							page: 1,
							step: 0,
						},
					});
				}}
			>
				go to page 1
			</button> */}
			<div className="page0-wrraper">
				<img
					src={intro}
					alt=""
					onClick={(e) => {
						clickHandler(e, {
							actionType: "fireEvent",
							eventName: "page1",
							eventData: {
								playAudio: "voiceStart",
								active: true,
								imageActive: images.page0.introStart,
							},
						});
					}}
				></img>
			</div>
			<ButtonControlAudio
				onPushAction={onPushAction}
				isAutoPlay={false}
				audioName={"voiceStart"}
				handleControlAudioCustom={handleControlAudioCustom}
				isPlayAudio={isPlayAudio}
			/>
		</div>
	);
};

export default React.memo(Home);
