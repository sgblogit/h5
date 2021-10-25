import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import Minigame from "components/Minigame/index";

const Page26 = (props) => {
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

	const clickEventName = 'page26';

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

	console.log('render page26')
	return (
		<Minigame
		page ='page26'
		image1={images.page26.box126}
		image2={images.page26.box226}
		pic1={images.page20.fish20}
		pic2={images.page20.dog20}
		pic3={images.page20.cat20}
		pic4={images.page20.duck20}
		object1={images.page26.box126}
		object2={images.page26.box226}
		ball={images.page16.ball17}
		objectG1={images.page26.boxGif26}
		objectG2={images.page20.girlGif20}
		text1={images.page20.here20}
		text2={images.page20.which20}
		audio1 = 'a26'
		audio2 = 'apple26'
		audio3 = 'ball26'
		audio4 = 'cat26'
		audio5 = 'doll26'
		audio6 = 'two26'
		congrats1 = {images.page26.congrats1}
		congrats2 = {images.page26.congrats2}
		congrats3 = {images.page26.congrats3}
		congrats4 = {images.page26.congrats4}
		congrats5 = {images.page26.congrats5}
		audiowin = 'true26'
		clickHandler= {clickHandler}


		currentPage={currentPage}
		onPushAction={onPushAction}
		/>
	);
};

export default React.memo(Page26);
