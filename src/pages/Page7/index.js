import React, { useState, useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from 'helper/audioPlayer';
import audios from "assets/audios/index";

import { setTimeOutAddClass } from "helper/setTimeOutControlClass";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";

const Page7 = (props) => {
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

	const clickEventName = 'page7';

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

	console.log('render page7')
	return (
		<div className="page7">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: 'changePage',
						eventName: 'page7',
						eventData: {
							page: 3,
							step: 0
						}
					})
				}}
			>go to page 2</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: 'fireEvent',
						eventName: 'page7',
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
						eventName: 'page7',
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
					page= "page7" 
					object2= {images.page2.teacher2}
					object1= {images.page2.kid2}
					// text2= {images.page7.textKid2}
					text1= {images.page7.textTeacher7}
					objectG1= {images.page7.gKid2}
					objectG2= {images.page7.gTeacher2}
					audio1="kidAudio2" 
					audio2="teacherAudio2"
					clickHandler= {clickHandler}
				/>
			</div>
		</div>
	);
};

export default React.memo(Page7);