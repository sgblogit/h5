import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";

const ButtonControlAudio = (props) => {
	const { onPushAction, isAutoPlay, audioName } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [isShowPlayButton, setIsShowPlayButton] = useState(isAutoPlay);
	const [player, setPlayer] = useState(null);

	const imgClickEventName = "ButtonBackgroundMusic";

	useEffect(() => {
		console.log(audios);
		let audioUrl = audios[audioName];
		let eAudioPlayer = new Audio(audioUrl);
		setPlayer(eAudioPlayer);
		if (isAutoPlay) {
			eAudioPlayer.play();
		}
		return () => {
			eAudioPlayer.pause();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const playAudio = useCallback(
		(flag) => {
			if (flag) {
				player?.play();
			} else {
				player?.pause();
			}
		},
		[player]
	);

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName
			) {
				if (recordEventData.eventData.playing) {
					playAudio(true);
					setIsShowPlayButton(true);
				} else {
					playAudio(false);
					setIsShowPlayButton(false);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const handleClickButton = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	return (
		<div className="button-background">
			{isShowPlayButton ? (
				<span
					onClick={(e) => {
						handleClickButton(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								playing: false,
							},
						});
					}}
				>
					pause backgound audio
				</span>
			) : (
				<span
					onClick={(e) => {
						handleClickButton(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								playing: true,
							},
						});
					}}
				>
					play backgound audio
				</span>
			)}
		</div>
	);
};

export default React.memo(ButtonControlAudio);
