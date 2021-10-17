import React, { useEffect, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";
import {
	setTimeOutAddClass,
	setIntervalControlClass,
} from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";

import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

const ButtonClickMusic = (props) => {
	const { onPushAction, sing, kids, icon } = props;

	const [imagesv, setImages] = useState("");
	const [imageicon, setImageIcons] = useState("");

	const { playAudio, pauseAudio } = audioPlayer;

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const imgClickEventName = "balaba";

	console.log(currentRecord, "===", prevRecord);

	const imgClickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
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
				setImages(recordEventData.eventData.images);
				setImageIcons(recordEventData.eventData.imageIcons);

				//playAudio
				let audioUrl = audios.find(
					(item) => item.id === recordEventData.eventData.playAudio
				)?.audio;
				playAudio(audioUrl);
			}
		}
	}, [currentRecord]);

	useEffect(() => {
		// setIntervalControlClass("wrapper-request", "zoom", 0);
		setIntervalControlClass("pic-img", "zoom", 3000);
	}, []);
	return (
		<div className="page1-wrapper">
			<img
				className="image-wrapper"
				data-aos="fade-right"
				src={sing}
				alt={sing}
			></img>
			<div
				className="wrapper-item"
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
				data-aos-duration="1000"
			>
				<img
					className="pic-1 pic-img"
					src={icon.button1}
					alt={icon.button1}
					onClick={(e) => {
						imgClickHandler(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								images: icon.pagePage,
								imageIcons: icon.iHavePage,
								playAudio: "iHaveAPaper",
							},
						});
						// setImages(icon.pagePage);
						// setImageIcons(icon.iHavePage);
						// onPushAction(e, "play_audio", "iHaveAPaper");
					}}
				></img>
				<img
					className="pic-2 pic-img"
					src={icon.button2}
					alt={icon.button2}
					onClick={(e) => {
						imgClickHandler(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								images: icon.gluePage,
								imageIcons: icon.iHaveGlue,
								playAudio: "iHaveAGlue",
							},
						});
						// setImages(icon.gluePage);
						// setImageIcons(icon.iHaveGlue);
						// onPushAction(e, "play_audio", "iHaveAGlue");
					}}
				></img>
				<img
					className="pic-3 pic-img"
					src={icon.button3}
					alt={icon.button3}
					onClick={(e) => {
						imgClickHandler(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								images: icon.scrissorPage,
								imageIcons: icon.iHaveScrissor,
								playAudio: "iHaveAScrissor",
							},
						});

						// setImages(icon.scrissorPage);
						// setImageIcons(icon.iHaveScrissor);
						// onPushAction(e, "play_audio", "iHaveAScrissor");
					}}
				></img>
				<img
					className="pic-4 pic-img"
					src={icon.button4}
					alt={icon.button4}
					onClick={(e) => {
						imgClickHandler(e, {
							actionType: "fireEvent",
							eventName: imgClickEventName,
							eventData: {
								images: icon.paintPage,
								imageIcons: icon.iHavePaint,
								playAudio: "iHaveAPaint",
							},
						});

						// setImages(icon.paintPage);
						// setImageIcons(icon.iHavePaint);
						// onPushAction(e, "play_audio", "iHaveAPaint");
					}}
				></img>
			</div>
			<img
				className="wrapper-people"
				data-aos="flip-up"
				data-aos-duration="1000"
				src={kids.url}
				alt={kids.url}
			></img>
			<div className="wrapper-request">
				<img src={imagesv} alt={imagesv}></img>
				<img src={imageicon} alt={imageicon}></img>
			</div>
		</div>
	);
};

export default React.memo(ButtonClickMusic);
