import React, { useState,useEffect } from "react";
import Container from "components/Container";
import BoxNext from "components/BoxNext/index";
import images from "assets/images/index";
import "./styles.scss";

import { useSelector } from "react-redux";

import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const PracticePlay = (props) => {
	const [classImage, setClassImage] = useState("");

	const { onPushAction, page6 } = props;
	const { imageKids, className } = props;


	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'PracticePlay'

	const imgClickHandler = (e,op)=>{
		onPushAction(e,op.actionType,op)
	}

	useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)
				
				if(recordEventData.eventData.active){
					setClassImage("active");
					//playAudio
					setTimeout(() => {
						let audioUrl2 = audios.find((item) => item.id === recordEventData.eventData.playAudios[0])?.audio
						playAudio(audioUrl2);
					}, 2000);
					setTimeout(() => {
						let audioUrl3 = audios.find((item) => item.id === recordEventData.eventData.playAudios[1])?.audio
						playAudio(audioUrl3);
					}, 3000);

				}else {
					//playAudio
					let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
					playAudio(audioUrl)
				}

				
			}
		}
	},[currentRecord])

	var content = page6.map((item, index) => {
		// window.addEventListener(`practicePlay_${item.image}`, () => {
		// 	setClassImage("active");
		// });
		if (item.active === false)
			return (
				<img
					className="item"
					alt={item.image}
					src={item.image}
					onClick={(e) => {
						imgClickHandler(e,{
							actionType: 'fireEvent',
							eventName: imgClickEventName,
							eventData: {
								active: false,
								playAudio:"audioFalse"
							}
						})

						//onPushAction(e, "play_audio", "audioFalse");
					}}
				/>
			);
		return (
			<img
				className={` item ${
					classImage || window[`classImage_${item.image}`]
						? classImage || window[`classImage_${item.image}`]
						: ""
				} `}
				alt={item.image}
				src={item.image}
				onClick={(e) => {

					imgClickHandler(e,{
						actionType: 'fireEvent',
						eventName: imgClickEventName,
						eventData: {
							active: true,
							playAudios:[item.audio,item.clap],
							pPlayName:`practicePlay_${item.image}`
						}
					})

					// onPushAction(
					// 	e,
					// 	"play_audio",
					// 	"audioTrue",
					// 	`practicePlay_${item.image}`
					// );

					// , () => {
					//   window[`classImage_${item.image}`] = "avtive";
					//   console.log(window[`classImage_${item.image}`]);
					//   // setClassImage("active");
					//   try {
					//     setClassImage("active");
					//   } catch (error) {
					//     console.log(error);
					//   }
					// }

					// setTimeout(() => {
					// 	onPushAction(e, "play_audio", item.audio);
					// }, 2000);
					// setTimeout(() => {
					// 	onPushAction(e, "play_audio", item.clap);
					// }, 3000);
				}}
			/>
		);
	});

	const renderContent = () => {
		return (
			<div className={` page6-wrapper ${className ? className : ""} `}>
				<div className="page6-wrapper__content--topic">
					<img
						className="topic"
						src={images.icons.topic6}
						alt={images.icons.topic6}
					/>
				</div>
				<div className="page6-wrapper__content">
					<div className="page6-wrapper__content--answer">
						<div className="mid-item">
							<img
								className="item kids"
								// data-aos="fade-down"
								alt={imageKids}
								src={imageKids}
							/>
							<img
								className="item ans"
								alt={images.icons.answer6}
								src={images.icons.answer6}
							/>
						</div>
						<div className="star">{content}</div>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};
export default PracticePlay;
