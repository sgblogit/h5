import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page23 = (props) => {
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

	const clickEventName = 'page23';

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

	console.log('render page23')
  return(
    <PracticeFind
    page ='page23'
    image1={images.page23.teacher23}
    image2={images.page23.girl23}
    object1={images.page23.teacher23}
    object2={images.page23.girl23}
    ball={images.page23.ball23}
    objectG1={images.page23.teacherGif23}
    objectG2={images.page23.girlGif23}
    text1={images.page23.question23}
    text2={images.page23.answer23}
	ballX="ball23"
	textKid14 = 'textKid14'
	textTeacher14 = 'textTeacher14'
    audio2 = 'whatNumber'
    audio1 = 'what23'
	reverseObj="reverse"
    clickHandler= {clickHandler}


    currentPage={currentPage}
    onPushAction={onPushAction}
    />
  )


};

export default React.memo(Page23);
