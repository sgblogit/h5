import images from "assets/images/index";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "components/Container";
import Aos from "aos";
import "aos/dist/aos.css";
import { setIntervalControlClass } from "helper/setTimeOutControlClass";

import { useSelector } from "react-redux";

import audioPlayer from 'helper/audioPlayer'
import audios from "assets/audios/index";

const ListenKidsClick = (props) => {
	const { onPushAction } = props;
	const { imageSing, imageKids, fileAudio, className } = props;

	const [image, setImage] = useState("");
	const [classAni, setClassAni] = useState("");

	const {playAudio,pauseAudio} = audioPlayer

	const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

	const imgClickEventName = 'ListenKidsClick'

	const imgClickHandler = (e,op)=>{
		onPushAction(e,op.actionType,op)
	}


	useEffect(() => {
		Aos.init();
	}, []);
	useEffect(() => {
		setTimeout(() => {
			setClassAni("");
		}, 1500);
	}, [classAni]);

	useEffect(() => {
		setIntervalControlClass("kid-zoom", "zoom", 3000);
	}, []);


	useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)
				setImage(recordEventData.eventData.images);
				setClassAni(recordEventData.eventData.classAni);

				//playAudio
				let audioUrl = audios.find((item) => item.id === recordEventData.eventData.playAudio)?.audio
				playAudio(audioUrl)
			}
		}
	},[currentRecord])


	const renderContent = () => {
		return (
			<div className={` page-wrapper1 ${className ? className : ""} `}>
				<div className="page-wrapper__content">
					<img
						data-aos="fade-right"
						src={images.icons.lisenPage2}
						alt={images.icons.lisenPage2}
						className="page-wrapper__content--box-empty1"
					/>
					<div className="page-content-des">
						<div className={`title-sing ${image === "" ? "" : classAni} `}>
							<img src={image} alt={image} />
						</div>
						<div className="people-kids">
							<img
								src={imageKids}
								alt={imageKids}
								onClick={(e) => {

									imgClickHandler(e,{
										actionType: 'fireEvent',
										eventName: imgClickEventName,
										eventData: {
											images: imageSing,
											classAni:"show",
											playAudio:fileAudio
										}
									})


									// onPushAction(e, "play_audio", fileAudio);
									// setImage(imageSing);
									// setClassAni("show");
								}}
								className="kid-zoom"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return <Container content={renderContent()} currentPage={currentPage} />;
};

export default ListenKidsClick;
