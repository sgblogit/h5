import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page19 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page19";

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
			page="page19"
			image1={images.common.rightTeacher}
			image2={images.common.leftKid}
			object1={image1}
			object2={image2}
			ball={images.page14.ball14}
			objectG1={images.common.rightTeacherGif}
			objectG2={images.common.leftKidGif}
			text1={images.page19.question19}
			text2={images.page19.answer19}
			textKid14="textKid14"
			textTeacher14="textTeacher14"
			ballX="ball19"
			audio1="whatpet"
			audio2="cat"
			reverseObj="reverse"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
			textT1={textT1}
			textT2={textT2}
		/>
	);
};

export default React.memo(Page19);
