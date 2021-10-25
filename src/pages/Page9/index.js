import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";
import Family from "./component/index";
import { setTimeOutAddClass } from "helper/setTimeOutControlClass";
import TitleMeeting from "components/TitleMeetting/index";
import "./styles.scss";
import images from "assets/images/index";

const Page9 = (props) => {
	const { onPushAction } = props;

	const [active, setActive] = useState("");

	const redBlockRef = useRef();

	const { currentPage, currentStep, currentRecord, prevRecord } = useSelector(
		(state) => state.app
	);

	const { playAudio, pauseAudio } = audioPlayer;

	const clickEventName = "page9";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		if (currentRecord.length > 0) {
			let recordEventData = currentRecord[currentRecord.length - 1];
			if (
				recordEventData.eventPage === currentPage &&
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === clickEventName
			) {
				console.log(`runRecordEvent`, recordEventData);
				if (recordEventData.eventData.active) {
					setActive("active");
					//setTimeOutAddClass('red-block','active',2000)
				} else {
					setActive("");
				}
				if (recordEventData.eventData.playAudio) {
					//playAudio
					let audioUrl = audios[recordEventData.eventData.playAudio];
					playAudio(audioUrl);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	console.log("render page9");
	return (
		<div className="page9">
			<button
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
			</button>
			<TitleMeeting bgTitle={images.page1.titleMeeting} />
			<Family
				page="page9"
				dadGif={images.page9.dadGifPage9}
				dadImg={images.page9.dadPage9}
				momGif={images.page9.momGifPage9}
				momImg={images.page9.momPage9}
				brotherGif={images.page9.brotherGifPage9}
				brotherImg={images.page9.brotherPage9}
				meGif={images.page9.meGifPage9}
				meImg={images.page9.mePage9}
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
