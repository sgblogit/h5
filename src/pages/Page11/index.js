import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import Favorites from "./component/index";

const Page11 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page11";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [teacherImg, setImageTeacher] = useState(images.common.leftTeacher);
	const [kidImg, setImageKid] = useState(images.common.rightKid);
	const [textT1, setTextT1] = useState("");
	const [active2, setActive2] = useState("");

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
				if (recordEventData.eventData.teacherGif) {
					setImageTeacher(recordEventData.eventData.teacherGif);
				}
				if (recordEventData.eventData.textT1Active) {
					setTextT1(recordEventData.eventData.textT1Active);
				}
				if (recordEventData.eventData.kidGif) {
					setImageKid(recordEventData.eventData.kidGif);
				}
				if (recordEventData.eventData.active2) {
					setActive2(recordEventData.eventData.active2);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

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
					teacher={teacherImg}
					audioTeacher="whatPage11"
					text={images.page11.textPage11}
					kidGif={images.common.rightKidGif}
					kid={kidImg}
					teacherGif={images.common.leftTeacher}
					audioKid="likePage11"
					cake={images.page11.cakePage11}
					egg={images.page11.eggPage11}
					pasta={images.page11.pastaPage11}
					candy={images.page11.candyPage11}
					textT1={textT1}
					active2={active2}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page11);
