import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page24 = (props) => {
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

	const clickEventName = 'page24';

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

	console.log('render page24')
  return(
    <PracticeFind
    page ='page24'
    image1={images.page24.teacher24}
    image2={images.page24.girl24}
    object1={images.page24.teacher24}
    object2={images.page24.girl24}
    ball={images.page24.ball24}
    objectG1={images.page24.teacherGif24}
    objectG2={images.page24.girlGif24}
    text2={images.page24.question24}
    text1={images.page24.answer24}
	// textKid14 = 'textKid14'
	textTeacher14 = 'textTeacher24'
    audio1 = 'what24'
    audio2 = 'whatNumber24'
    clickHandler= {clickHandler}


    currentPage={currentPage}
    onPushAction={onPushAction}
    />
  )


};

export default React.memo(Page24);
