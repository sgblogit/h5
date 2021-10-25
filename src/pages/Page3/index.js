import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";

const Page3 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page3";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				console.log(`runRecordEvent`, recordEventData);
				if (recordEventData.eventData.active) {
					setActive("active");
					//setTimeOutAddClass('red-block','active',2000)
				} else {
					setActive("");
				}
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	console.log("render page3");
	return (
		<div className="page3">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page3",
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
						eventName: "page3",
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
						eventName: "page3",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button>

			{/* <div ref={redBlockRef} className={`red-block ${active}`}>red block</div> */}

			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />
				<ConversationTK
					page="page3"
					object2={images.common.rightTeacher}
					object1={images.common.leftKid}
					// text2= {images.page3.textKid2}
					text2={images.page3.textTeacher3}
					objectG1={images.common.leftKidGif}
					objectG2={images.common.rightTeacherGif}
					audio1=""
					audio2="teacherAudio3"
					reverseObj="reverse"
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page3);
