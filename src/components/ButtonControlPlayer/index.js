import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";
import images from "assets/images";
import { handleClickImage } from "helper/appServices";

const ButtonControlPlayer = (props) => {
	const {
		onPushAction,
		isAutoPlay,
		audioName,
		customStyle,
		handleControlAudioCustom,
		isPlayAudio,
		clickHandler,
		data,
		page,
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
		<div className="controll" style={{ ...customStyle }}>
			{isShowPlayButtonValue ? (
				<span 
					onClick={(e) => {
						setTimeout(() => {
							handleClickButton(e, {
								actionType: "fireEvent",
								eventName: imgClickEventName,
								eventData: {
									playing: false,
								},
							});
					
						}, 150);
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName:  page,
									eventData: {
										...data
									},
								},
							},
							0
						);
						
					
					}}
				>
					<img src={images.common.Pauses} alt="" />
				</span>
			) : (
				<span
					onClick={(e) => {
						setTimeout(() => {
							handleClickButton(e, {
								actionType: "fireEvent",
								eventName: imgClickEventName,
								eventData: {
									playing: true,
								},
							});
						}, 150);
						handleClickImage(
							clickHandler,
							{
								event: e,
								data: {
									actionType: "fireEvent",
									eventName:  page,
									eventData: {
										...data
										
									},
								},
							},
							0
						);
						
				
					}}
				>
					<img src={images.common.Button} alt="" />
				</span>
			)}
		</div>
	);
};

export default React.memo(ButtonControlPlayer);
