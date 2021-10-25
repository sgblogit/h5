import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import HereCat from "components/HereCat/index";

const Page20 = (props) => {
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

	const clickEventName = 'page20';

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

	console.log('render page20')
	return (
		<HereCat
		page ='page20'
		image1={images.page20.teacher20}
		image2={images.page20.girl20}
		pic1={images.page20.fish20}
		pic2={images.page20.dog20}
		pic3={images.page20.cat20}
		pic4={images.page20.duck20}
		object1={images.page20.teacher20}
		object2={images.page20.girl20}
		ball={images.page16.ball17}
		objectG1={images.page20.teacherGif20}
		objectG2={images.page20.girlGif20}
		text1={images.page20.here20}
		text2={images.page20.which20}
		audio1 = 'which20'
		audio2 = 'here20'
		clickHandler= {clickHandler}


		currentPage={currentPage}
		onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page20);
