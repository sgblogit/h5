import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";
import images from "assets/images/index";
import PracticeFind from "components/PracticeFind/index";

const Page19 = (props) => {
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

	const clickEventName = 'page19';

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

	console.log('render page19')
  return(
    <PracticeFind
    page ='page19'
    image1={images.page19.teacher19}
    image2={images.page19.girl19}
    object1={images.page19.teacher19}
    object2={images.page19.girl19}
    ball={images.page14.ball14}
    objectG1={images.page19.teacherGif19}
    objectG2={images.page19.girlGif19}
    text1={images.page19.question19}
    text2={images.page19.answer19}
	textKid14 = 'textKid14'
	textTeacher14 = 'textTeacher14'
	ballX='ball19'
    audio1 = 'whatpet'
    audio2 = 'cat'
	reverseObj="reverse"
    clickHandler= {clickHandler}


    currentPage={currentPage}
    onPushAction={onPushAction}
    />
  )


};

export default React.memo(Page19);
