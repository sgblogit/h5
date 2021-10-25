import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import Favorites from "./component/index";

const Page11 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page11";

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

	console.log("render page11");
	return (
		<div className="page11">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page11",
						eventData: {
							page: 2,
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
						eventName: "page11",
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
						eventName: "page11",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button>
			<div className="page-wrapper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />
				<Favorites
					clickHandler={clickHandler}
					page="page11"
					teacher={images.common.leftTeacher}
					audioTeacher="whatPage11"
					text={images.page11.textPage11}
					kidGif={images.common.rightKidGif}
					kid={images.common.rightKid}
					teacherGif={images.common.leftTeacher}
					audioKid="likePage11"
					cake={images.page11.cakePage11}
					egg={images.page11.eggPage11}
					pasta={images.page11.pastaPage11}
					candy={images.page11.candyPage11}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page11);
