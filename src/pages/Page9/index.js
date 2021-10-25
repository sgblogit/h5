import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import Family from "./component/index";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
import images from "assets/images/index";

const Page9 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio } = audioPlayer;

	const clickEventName = "page9";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	const [img1, setImageDad] = useState(images.page9.dadGifPage9);
	const [img2, setImageMom] = useState(images.page9.momGifPage9);
	const [img3, setImageBrother] = useState(images.page9.brotherGifPage9);
	const [img4, setImageMe] = useState(images.page9.meGifPage9);

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				if (recordEventData.eventData.active) {
					setActive("active");
				} else {
					setActive("");
				}
				if (recordEventData.eventData.playAudio) {
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
				if (recordEventData.eventData.imgT1) {
					setImageDad(recordEventData.eventData.imgT1);
				}
				if (recordEventData.eventData.imgT2) {
					setImageMom(recordEventData.eventData.imgT2);
				}
				if (recordEventData.eventData.imgT3) {
					setImageBrother(recordEventData.eventData.imgT3);
				}
				if (recordEventData.eventData.imgT4) {
					setImageMe(recordEventData.eventData.imgT4);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);
	return (
		<div className="page9">
			{/* <button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page9",
						eventData: {
							page: 2,
							step: 0,
						},
					});
				}}
			>
				go to page 2
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page9",
						eventData: {
							playAudio: "brotherPage9",
							active: false,
						},
					});
				}}
			>
				play audio
			</button>

			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "fireEvent",
						eventName: "page9",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
			<TitleMeeting bgTitle={images.page1.titleMeeting} />
			<Family
				page="page9"
				dadGif={images.page9.dadPage9}
				img1={img1}
				momGif={images.page9.momPage9}
				img2={img2}
				brotherGif={images.page9.brotherPage9}
				img3={img3}
				meGif={images.page9.mePage9}
				img4={img4}
				people={images.common.rightKid}
				audioDad="dadPage9"
				audioMom="momPage9"
				audioBrother="brotherPage9"
				audioMe="mePage9"
				clickHandler={clickHandler}
			/>
		</div>
	);
};

export default React.memo(Page9);
