import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page18 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page18";

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

	console.log("render page18");
	return (
		<PracticeFind
			page="page18"
			image1={images.page18.teacher18}
			image2={images.page18.girl18}
			object1={images.page18.teacher18}
			object2={images.page18.girl18}
			ball={images.page18.ball18}
			objectG1={images.page18.teacherGif18}
			objectG2={images.page18.girlGif18}
			text1={images.page18.question18}
			text2={images.page18.answer18}
			audio1="what"
			audio2="itadoll"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page18);
