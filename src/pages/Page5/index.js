import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";
import Question from "components/Question/index";

const Page5 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page5";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.common.leftTeacher);
	const [image2, setImage2] = useState(images.common.rightKid);

	const [textT1, setTextT1] = useState(null);
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
				if (recordEventData.eventData.textT1) {
					setTextT1(recordEventData.eventData.textT1);
				}
				if (recordEventData.eventData.textT2) {
					setTextT2(recordEventData.eventData.textT2);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	console.log("render page5");
	return (
		<div className="page5">
			{/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page5",
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
						eventName: "page5",
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
						eventName: "page5",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.common.title} />
				<Question	
					teacherImg={images.page5.teacherPage5}
					teacherText={images.page5.textPage5}
					audioTeacher="audioPage5"
					page="page5"
					clickHandler={clickHandler}

				/>
			</div>
		</div>
	);
};

export default React.memo(Page5);
