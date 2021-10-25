import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import HereApple from "components/HereApple/index";

const Page16 = (props) => {
	const { onPushAction } = props;

	const [active,setActive] = useState('');

	const redBlockRef = useRef();

	const {
		currentPage,
		currentStep,
		currentRecord,
		prevRecord
	} = useSelector((state) => state.app);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = 'page16';

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op)
	}


	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName) {
				console.log(`runRecordEvent`, recordEventData)
				if (recordEventData.eventData.active) {
					setActive('active')
					//setTimeOutAddClass('red-block','active',2000)
				}else {
					setActive('')
				}
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio]
					playAudio(audioUrl)
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord])

	console.log('render page16')
	return (
		<HereApple
		page ='page16'
		pic1={images.page16.avocado16}
		pic2={images.page16.orange16}
		pic3={images.page16.apple16}
		pic4={images.page16.banana16}
		object1={images.common.rightTeacher}
		object2={images.common.leftKid}
		ball={images.page16.ball17}
		objectG1={images.common.rightTeacherGif}
		objectG2={images.common.leftKidGif}
		text1={images.page16.here16}
		text2={images.page16.which16}
		audio1 = 'which'
		audio2 = 'here'
		clickHandler= {clickHandler}
		currentPage={currentPage}
		onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page16);
