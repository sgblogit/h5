import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page23 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page23";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.common.rightTeacher);
	const [image2, setImage2] = useState(images.common.leftKid);
	const [textT1, setTextT1] = useState("");
	const [textT2, setTextT2] = useState("");

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
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.imageG1) {
					setImage1(recordEventData.eventData.imageG1);
				}
				if (recordEventData.eventData.textT1) {
					setTextT1(recordEventData.eventData.textT1);
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

	return (
		<PracticeFind
			page="page23"
			object1={image1}
			object2={image2}
			ball={images.page23.ball23}
			objectG1={images.common.rightTeacherGif}
			objectG2={images.common.leftKidGif}
			text1={images.page23.question23}
			text2={images.page23.answer23}
			ballX="ball23"
			textKid14="textKid14"
			textTeacher14="textTeacher14"
			audio2="whatNumber"
			audio1="what23"
			reverseObj="reverse"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
			textT1={textT1}
			textT2={textT2}
		/>
	);
};

export default React.memo(Page23);
