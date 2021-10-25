import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import images from "assets/images/index";

import "./styles.scss";
import Minigame from "components/Minigame/index";

const Page26 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page26";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [image1, setImage1] = useState(images.page26.box126);
	const [image2, setImage2] = useState(images.page26.box226);
	const [textT1, setTextT1] = useState("");
	const [textT2, setTextT2] = useState("");
	const [textT3, setTextT3] = useState("");
	const [textT4, setTextT4] = useState("");
	const [textT5, setTextT5] = useState("");
	const [textT6, setTextT6] = useState("");

	useEffect(() => {
		let timeOut1;
		let timeOut2;
		let timeOut3;
		let timeOut4;
		let timeOut5;
		let timeOut6;
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.objectG1) {
					setImage1(recordEventData.eventData.objectG1);
				}

				if (
					recordEventData.eventData.imageT2 &&
					recordEventData.eventData.textT1
				) {
					timeOut1 = setTimeout(() => {
						setImage1(recordEventData.eventData.imageT2);
						setTextT1(recordEventData.eventData.textT1);
					}, 2600);
				}

				if (recordEventData.eventData.textT2) {
					setTextT2("activehide");
					timeOut2 = setTimeout(() => {
						setTextT2("");
						onPushAction(
							{},
							{
								actionType: "fireEvent",
								eventName: "page26",
								eventData: {
									playAudio: "audiowin",
									active: true,
								},
							}
						);
					}, 3000);
				}

				if (recordEventData.eventData.textT3) {
					setTextT3("activehide");
					timeOut3 = setTimeout(() => {
						setTextT3("");
						onPushAction(
							{},
							{
								actionType: "fireEvent",
								eventName: "page26",
								eventData: {
									playAudio: "audiowin",
									active: true,
									textT2: "activehide",
								},
							}
						);
					}, 3000);
				}

				if (recordEventData.eventData.textT4) {
					setTextT4("activehide");
					timeOut4 = setTimeout(() => {
						setTextT4("");
						onPushAction(
							{},
							{
								actionType: "fireEvent",
								eventName: "page26",
								eventData: {
									playAudio: "audiowin",
									active: true,
								},
							}
						);
					}, 3000);
				}

				if (recordEventData.eventData.textT5) {
					setTextT5("activehide");
					timeOut5 = setTimeout(() => {
						setTextT5("");
						onPushAction(
							{},
							{
								actionType: "fireEvent",
								eventName: "page26",
								eventData: {
									playAudio: "audiowin",
									active: true,
								},
							}
						);
					}, 3000);
				}

				if (recordEventData.eventData.textT6) {
					setTextT6("activehide");
					timeOut6 = setTimeout(() => {
						setTextT6("");
						onPushAction(
							{},
							{
								actionType: "fireEvent",
								eventName: "page26",
								eventData: {
									playAudio: "audiowin",
									active: true,
								},
							}
						);
					}, 3000);
				}
			}
		}
		return () => {
			if (timeOut1) {
				clearTimeout(timeOut1);
			}
			if (timeOut2) {
				clearTimeout(timeOut2);
			}
			if (timeOut3) {
				clearTimeout(timeOut3);
			}
			if (timeOut4) {
				clearTimeout(timeOut4);
			}
			if (timeOut5) {
				clearTimeout(timeOut5);
			}
			if (timeOut6) {
				clearTimeout(timeOut6);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<Minigame
			page="page26"
			image1={images.page26.box126}
			image2={images.page26.box226}
			pic1={images.page20.fish20}
			pic2={images.page20.dog20}
			pic3={images.page20.cat20}
			pic4={images.page20.duck20}
			object1={image1}
			object2={image2}
			ball={images.page16.ball17}
			objectG1={images.page26.boxGif26}
			objectG2={images.page20.girlGif20}
			text1={images.page20.here20}
			text2={images.page20.which20}
			audio1="a26"
			audio2="apple26"
			audio3="ball26"
			audio4="cat26"
			audio5="doll26"
			audio6="two26"
			congrats1={images.page26.congrats2}
			congrats2={images.page26.congrats2}
			congrats3={images.page26.congrats2}
			congrats4={images.page26.congrats2}
			congrats5={images.page26.congrats2}
			audiowin="true26"
			clickHandler={clickHandler}
			currentPage={currentPage}
			onPushAction={onPushAction}
			textT1={textT1}
			textT2={textT2}
			textT3={textT3}
			textT4={textT4}
			textT5={textT5}
			textT6={textT6}
		/>
	);
};

export default React.memo(Page26);
