import React, { useEffect, useRef, useState } from "react";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";
import audios from "assets/audios/index";
import audioPlayer from "helper/audioPlayer";

const Home = (props) => {
	const { onPushAction } = props;

	const [active,setActive] = useState('');

	const redBlockRef = useRef();

	const [intro,setIntro] = useState(images.page0.kidStart);
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
	}, [currentRecord])
	console.log('render page0')
	return (
		<div className="page0">
			<h1>this is page {currentPage}</h1>
			<button
				onClick={(e)=>{
					clickHandler(e,{
						actionType:'changePage',
						eventName: 'page0',
						eventData: {
							page:1,
							step:0
						}
					})
				}}
			>go to page 1</button>
			<div className ="page0-wrraper" >
				<img 
				src ={intro}
				alt =""
				onClick={(e) => {
					setIntro(images.page0.introStart)
					clickHandler(e, {
						actionType: 'fireEvent',
						eventName: 'page1',
						eventData: {
							playAudio: 'voiceStart',
							active:true
						}
					})
				}} >
				</img>
			</div>
		</div>
	);
};

export default React.memo(Home);
