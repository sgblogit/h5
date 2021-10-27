import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import audioPlayer from "helper/audioPlayer";
import audios from "assets/audios/index";

import "./styles.scss";
import TitleMeeting from "components/TitleMeetting/index";
import images from "assets/images/index";
import ConversationTK from "components/ConversationTK/index";
import { runRecord } from "helper/appServices";

const Page1 = (props) => {
	const { onPushAction } = props;

	const { currentPage, currentStep, currentRecord } = useSelector(
		(state) => state.app
	);

	const [image1, setImage1] = useState(images.common.leftTeacher);
	const [image2, setImage2] = useState(images.common.leftKid);

	const [textT1, setTextT1] = useState(null);
	const [textT2, setTextT2] = useState(null);

	const clickEventName = "page1";

	const clickHandler = (e, op) => {
		onPushAction(e, op.actionType, op);
	};

	useEffect(() => {
		const values = runRecord({
			eventName: clickEventName,
			callbacks: {
				imageG1: setImage1,
				imageG2: setImage2,
				textT1: setTextT1,
				textT2: setTextT2,
			},
		});
		console.log(values, "values");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRecord]);

	return (
		<div className="page1">
			<div className="page-wrraper">
				<TitleMeeting bgTitle={images.page1.titleMeeting} />
				<ConversationTK
					page="page1"
					image1={image1}
					image2={image2}
					text1={textT1}
					textGT1={images.page1.textKid}
					text2={textT2}
					textGT2={images.page1.textTeacher}
					imageG1={images.common.leftTeacherGif}
					imageG2={images.common.rightKidGif}
					audio1="kidAudio"
					audio2="teacherAudio"
					clickHandler={clickHandler}
				/>
			</div>
			{/* <h1>this is page {currentPage}</h1>
			<button
				onClick={(e) => {
					clickHandler(e, {
						actionType: "changePage",
						eventName: "page1",
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
						eventName: "page1",
						eventData: {
							playAudio: "gitAudio",
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
						eventName: "page1",
						eventData: {
							playAudio: "gitAudio",
							active: true,
						},
					});
				}}
			>
				play audio and animation
			</button> */}
		</div>
	);
};

export default React.memo(Page1);
