import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";

import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";

const Page1 = (props) => {
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

	const clickEventName = 'page1';

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

	console.log('render page1')
	return (
		<div className="page1">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: 'changePage',
						eventName: 'page1',
						eventData: {
							page: 2,
							step: 0
						}
					})
				}}
			>go to page 2</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: 'fireEvent',
						eventName: 'page1',
						eventData: {
							playAudio: 'gitAudio',
							active:false
						}
					})
				}}
			>play audio</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: 'fireEvent',
						eventName: 'page1',
						eventData: {
							playAudio: 'gitAudio',
							active:true
						}
					})
				}}
			>play audio and animation</button>

			{/* <div ref={redBlockRef} className={`red-block ${active}`}>red block</div> */}
			
			<div className ="page-wrraper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />
				<ConversationTK 
					page= "page1" 
					object1= {images.page1.teacher}
					object2= {images.page1.kid}
					objectG1= {images.page1.gKid}
					objectG2= {images.page1.gTeacher}
					text1= {images.page1.textKid}
					text2= {images.page1.textTeacher}
					audio1= "kidAudio" 
					audio2= "teacherAudio"
					clickHandler= {clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page1);
