import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";

import "./styles.scss";
import HereApple from "components/HereApple/index";

const Page16 = (props) => {
	const { onPushAction } = props;
	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page16";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.common.rightTeacher);
	const [image2, setImage2] = useState(images.common.leftKid);
	const [stateSet, setStates] = useState("");
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
				if (recordEventData.eventData.imageG2) {
					setImage2(recordEventData.eventData.imageG2);
				}
				if (recordEventData.eventData.textT1) {
					setTextT1(recordEventData.eventData.textT1);
				}
				if (recordEventData.eventData.objectG1) {
					setImage1(recordEventData.eventData.objectG1);
				}
				if (recordEventData.eventData.textT2) {
					setTextT2(recordEventData.eventData.textT2);
				}
				if (recordEventData.eventData.stateSet) {
					setStates(recordEventData.eventData.stateSet);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	console.log("render page16");
	return (
		<HereApple
			page="page16"
			pic1={images.page16.avocado16}
			pic2={images.page16.orange16}
			pic3={images.page16.apple16}
			pic4={images.page16.banana16}
			object1={image1}
			object2={image2}
			ball={images.page16.ball17}
			objectG1={images.common.rightTeacherGif}
			objectG2={images.common.leftKidGif}
			text1={images.page16.here16}
			text2={images.page16.which16}
			audio1="which"
			audio2="here"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
			textT1={textT1}
			textT2={textT2}
			stateSet={stateSet}
		/>
	);
};

export default React.memo(Page16);
