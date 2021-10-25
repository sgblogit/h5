import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";

import "./styles.scss";
import HereCat from "components/HereCat/index";

const Page20 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page20";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.common.leftTeacher);
	const [image2, setImage2] = useState(images.common.rightKid);
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
				if (recordEventData.eventData.objectG2) {
					setImage2(recordEventData.eventData.objectG2);
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

	return (
		<HereCat
			page="page20"
			image1={images.page20.teacher20}
			image2={images.page20.girl20}
			pic1={images.page20.fish20}
			pic2={images.page20.dog20}
			pic3={images.page20.cat20}
			pic4={images.page20.duck20}
			object1={image1}
			object2={image2}
			ball={images.page16.ball17}
			objectG1={images.common.leftTeacherGif}
			objectG2={images.common.rightKidGif}
			text1={images.page20.here20}
			text2={images.page20.which20}
			audio1="which20"
			audio2="here20"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
			textT1={textT1}
			textT2={textT2}
			stateSet={stateSet}
		/>
	);
};

export default React.memo(Page20);
