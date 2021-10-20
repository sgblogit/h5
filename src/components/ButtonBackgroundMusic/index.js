import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";

const ButtonBackgroundMusic = (props) => {
	const { onPushAction, autoPlay, audioName } = props;

	const {
		currentPage,
		currentStep,
		currentRecord
	} = useSelector((state) => state.app);

	const [isShowPlayButton, setIsShowPlayButton] = useState(autoPlay);
	const [player, setPlayer] = useState(null)

	const imgClickEventName = 'ButtonBackgroundMusic'

	useEffect(() => {
		console.log(audios)
		let audioUrl = audios[audioName]
		let eAudioPlayer = new Audio(audioUrl)
		setPlayer(eAudioPlayer);
		if (autoPlay) {
			eAudioPlayer.play();
		}
		return () => {
			eAudioPlayer.pause();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const playAudio = (flag) => {
		if (flag) {
			player?.play();
		} else {
			player?.pause();
		}
	}

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName) {
				console.log(`runRecordEvent`, recordEventData)
				if (recordEventData.eventData.playing) {
					playAudio(true)
					setIsShowPlayButton(true)
				} else {
					playAudio(false)
					setIsShowPlayButton(false)
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord])


	const handleClickButton = (e, op) => {
		onPushAction(e, op.actionType, op)
	}

	return (
		<div className="button-background">
			{isShowPlayButton ? (
				<button
					onClick={(e) => {
						handleClickButton(e, {
							actionType: 'fireEvent',
							eventName: imgClickEventName,
							eventData: {
								playing: false
							}
						})
					}}
				>
					pause backgound audio
				</button>
			) : (
				<button
					onClick={(e) => {
						handleClickButton(e, {
							actionType: 'fireEvent',
							eventName: imgClickEventName,
							eventData: {
								playing: true
							}
						})
					}}
				>
					play backgound audio
				</button>
			)}
		</div>
	);
};

export default React.memo(ButtonBackgroundMusic);
