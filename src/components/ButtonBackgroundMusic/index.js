import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import audioPlayer from "helper/audioPlayer";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";

const ButtonBackgroundMusic = (props) => {
	const { onPushAction, autoPlay, audioName } = props;

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const [isShowPlayButton, setIsShowPlayButton] = useState(autoPlay);
	const [player, setPlayer] = useState(null);

	const imgClickEventName = "ButtonBackgroundMusic";

	useEffect(() => {
		let audioUrl = audios.find((item) => item.id === audioName)?.audio;
		let eAudioPlayer = new Audio(audioUrl);
		setPlayer(eAudioPlayer);
		if (autoPlay) {
			eAudioPlayer.play();
		}
		return () => {
			eAudioPlayer.pause();
		};
	}, []);

	const playAudio = (flag) => {
		let audioUrl = audios.find((item) => item.id === audioName)?.audio;
		if (flag) {
			audioPlayer.playAudio(audioUrl);
		} else {
			audioPlayer.pauseAudio(audioUrl);
		}
	};

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName
			) {
				console.log(`runRecordEvent`, recordEventData);
				if (recordEventData.eventData.playing) {
					playAudio(true);
					setIsShowPlayButton(true);
				} else {
					playAudio(false);
					setIsShowPlayButton(false);
				}
			}
		}
	}, [currentRecord]);

	const handleClickButton = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	return (
		<div className="button-background">
			{isShowPlayButton ? (
				<img
					src={images.icons.icPauseMusic}
					onClick={(e) => {
						handleClickButton(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								playing: false,
							},
						});
					}}
					alt={images.icons.icPauseMusic}
				/>
			) : (
				<img
					src={images.icons.icPlayMusic}
					onClick={(e) => {
						handleClickButton(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								playing: true,
							},
						});
					}}
					alt={images.icons.icPlayMusic}
				/>
			)}
		</div>
	);
};

export default React.memo(ButtonBackgroundMusic);
