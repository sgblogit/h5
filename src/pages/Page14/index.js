import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";
import "./styles.scss";
import PracticeFind from "components/PracticeFind/index";

const Page14 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page14";

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

	console.log("render page14");
	return (
		<PracticeFind
			page="page14"
			image1={images.page14.teacher14}
			image2={images.page14.girl14}
			object1={images.page14.teacher14}
			object2={images.page14.girl14}
			ball={images.page14.ball14}
			objectG1={images.page14.teacherGif14}
			objectG2={images.page14.girlGif14}
			text1={images.page14.question14}
			text2={images.page14.answer14}
			textKid14="textKid14"
			textTeacher14="textTeacher14"
			audio1="verygood"
			audio2="apple"
			reverseObj="reverse"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page14);
