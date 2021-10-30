import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";

const ButtonControlAudio = (props) => {
	const {
		onPushAction,
		isAutoPlay,
		audioName,
		customStyle,
		handleControlAudioCustom,
		isPlayAudio,
		urlButtonPlay,
		urlButtonPause,
		isLeft,
	} = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [isShowPlayButton, setIsShowPlayButton] = useState(isAutoPlay);
	const [player, setPlayer] = useState(null);

	const imgClickEventName = "ButtonBackgroundMusic";

	useEffect(() => {
		let audioUrl = audios[audioName];
		setPlayer(audioUrl);
		if (isAutoPlay) {
			audioPlayer.playAudio(audioUrl);
		}
		return () => {
			audioPlayer.pauseAudio(audioUrl);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const playAudio = useCallback(
		(flag) => {
			if (flag) {
				audioPlayer.playAudio(player);
			} else {
				audioPlayer.pauseAudio(player);
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
					if (typeof handleControlAudioCustom === "function") {
						handleControlAudioCustom(true);
					} else {
						setIsShowPlayButton(true);
					}
				} else {
					playAudio(false);
					if (typeof handleControlAudioCustom === "function") {
						handleControlAudioCustom(false);
					} else {
						setIsShowPlayButton(false);
					}
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	const handleClickButton = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const isShowPlayButtonValue = useMemo(() => {
		if (typeof isPlayAudio === "boolean") {
			return isPlayAudio;
		} else {
			return isShowPlayButton;
		}
	}, [isPlayAudio, isShowPlayButton]);

	return (
		<div
			className="button-background"
			style={
				!isLeft
					? { left: "20px", ...customStyle }
					: { right: "20px", ...customStyle }
			}
		>
			{isShowPlayButtonValue ? (
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
					<img src={urlButtonPause} alt="" />
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
					<img src={urlButtonPlay} alt="" />
				</span>
			)}
		</div>
	);
};

export default React.memo(ButtonControlAudio);
