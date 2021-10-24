import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page17 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page17";

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

	console.log("render page17");
	return (
		<PracticeFind
			page="page17"
			image1={images.page17.teacher17}
			image2={images.page17.girl17}
			object1={images.page17.teacher17}
			object2={images.page17.girl17}
			ball={images.page17.ball17}
			objectG1={images.page17.teacherGif17}
			objectG2={images.page17.girlGif17}
			text1={images.page17.question17}
			text2={images.page17.answer17}
			audio1="thatRight"
			audio2="it17"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page17);
