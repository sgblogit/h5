import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";

const Page7 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page7";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.common.leftKid);
	const [image2, setImage2] = useState(images.common.rightTeacher);

	const [textT2, setTextT2] = useState(null);

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
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.imageG1) {
					setImage1(recordEventData.eventData.imageG1);
				}
				if (recordEventData.eventData.imageG2) {
					setImage2(recordEventData.eventData.imageG2);
				}
				if (recordEventData.eventData.textT2) {
					setTextT2(recordEventData.eventData.textT2);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	console.log("render page7");
	return (
		<div className="page7">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page7",
						eventData: {
							page: 3,
							step: 0,
						},
					});
				}}
			>
				go to page 2
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page7",
						eventData: {
							playAudio: "gitAudio",
							active: false,
						},
					});
				}}
			>
				play audio
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page7",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button>
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />
				<ConversationTK
					page="page7"
					image2={image2}
					image1={image1}
					text2={textT2}
					textGT2={images.page7.textTeacher7}
					imageG1={images.common.leftKidGif}
					imageG2={images.common.rightTeacher}
					audio1=""
					audio2="teacherAudio7"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page7);
